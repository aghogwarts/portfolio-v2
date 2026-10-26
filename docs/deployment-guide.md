# Portfolio v2 deployment guide

This document describes the public architecture and repeatable deployment
process for the portfolio. It deliberately omits origin addresses, SSH
fingerprints, private keys, account identifiers, local computer paths, and
incident-specific server details.

## Architecture

```text
Visitor
  -> Cloudflare DNS, proxy, and edge TLS
  -> Nginx on the VPS using a trusted origin certificate
  -> Astro static files
```

- Application: Astro static site
- Production domain: `anshgoyal.dev`
- Alternate hostname: `www.anshgoyal.dev`
- Edge provider and registrar: Cloudflare
- Origin web server: Nginx on Ubuntu
- Origin certificate: Let's Encrypt, managed by Certbot
- Build output: `dist/`

## DNS and TLS

Cloudflare should contain:

| Type | Name | Target | Proxy |
|---|---|---|---|
| `A` | `@` | VPS origin address | Proxied |
| `CNAME` | `www` | `anshgoyal.dev` | Proxied |

Cloudflare SSL/TLS mode must be **Full (strict)**. Do not use Flexible mode:
the connection from Cloudflare to the origin must also use trusted HTTPS.

The Nginx virtual host must include both names:

```nginx
server_name anshgoyal.dev www.anshgoyal.dev;
```

The initial certificate can be requested after DNS points to the VPS and port
80 is reachable:

```bash
certbot --nginx --redirect \
  --email <ACME_ACCOUNT_EMAIL> \
  --agree-tos \
  --no-eff-email \
  -d anshgoyal.dev \
  -d www.anshgoyal.dev
```

What this does:

- asks Let's Encrypt to validate both hostnames;
- stores the certificate and private key under `/etc/letsencrypt/`;
- updates the matching Nginx virtual host;
- redirects HTTP traffic to HTTPS;
- configures unattended renewal through Certbot's systemd timer.

Safe read-only or simulation checks:

```bash
nginx -t
systemctl status certbot.timer --no-pager
certbot renew --dry-run
```

`nginx -t` validates configuration without reloading Nginx. The Certbot dry
run uses Let's Encrypt's staging service to test renewal without replacing the
production certificate.

## Manual build

Use a Node.js version compatible with `package.json` and run:

```bash
npm ci
npm run build
```

`npm ci` installs exactly the dependency versions in `package-lock.json`.
`npm run build` generates the production site in `dist/`.

The origin must serve the contents of `dist/`, not a nested `dist/dist/`
directory. When copying files, the trailing slash matters:

```bash
rsync -az dist/ <DEPLOY_USER>@<ORIGIN_HOST>:/var/www/portfolio/dist/
```

This copies the *contents* of the local `dist/` directory into the target.

## CI/CD security requirements

Automated deployments must follow these rules:

1. Use a dedicated unprivileged deployment account, never `root`.
2. Use a dedicated SSH key used only by this repository's deployment job.
3. Store the private key and origin host in GitHub Actions secrets; never put
   their values in the repository, workflow logs, issues, or documentation.
4. Verify the origin's SSH host key rather than disabling host checking.
5. Grant the deployment account write access only to the site release path.
6. Set workflow permissions to `contents: read`.
7. Pin third-party actions to full commit SHAs, or avoid them when a small
   auditable shell command is sufficient.
8. Do not reload Nginx merely because static files changed; Nginx reads those
   files per request.

A Cloudflare cache purge is normally unnecessary for this site. Astro gives
static assets content-hashed names and long-lived immutable cache headers,
while Cloudflare does not cache HTML by default unless a Cache Rule changes
that behavior.

## Secrets inventory

The deployment workflow may require the following GitHub Actions secrets:

| Secret | Purpose |
|---|---|
| `SERVER_HOST` | Origin hostname or address |
| `DEPLOY_SSH_KEY` | Dedicated deployment private key |
| `SERVER_KNOWN_HOSTS` | Trusted SSH host-key entry |

Use a non-secret repository variable for the username if desired:

| Variable | Suggested value |
|---|---|
| `DEPLOY_USER` | `deploy` |

Do not reuse a personal or root SSH private key. Do not paste secret values
into chat, screenshots, Markdown files, or terminal commands that will be
captured in shell history.

## Verification after deployment

Check the public edge:

```bash
curl -I https://anshgoyal.dev
curl -I https://www.anshgoyal.dev
```

Expected results include a successful HTTPS response and Cloudflare response
headers. Then open the site in a browser and test navigation, images, fonts,
and the `/journey` page.

On the origin, use read-only checks when troubleshooting:

```bash
nginx -t
systemctl is-active nginx
ls -la /var/www/portfolio/dist
```

## Change-control rule

Before changing the VPS, state the exact commands, what each command does,
the expected effect, risk, and rollback plan. Obtain explicit approval before
running package operations, editing server files or permissions, changing
users, SSH, Nginx, certificates or firewall rules, reloading services,
rebooting, or deploying.

Keep detailed incident notes in a private operational journal outside Git
tracking. Only generalized, redacted documentation belongs in this public
repository.
