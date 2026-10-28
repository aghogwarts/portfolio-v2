export const SITE = {
  name: 'Ansh Goyal',
  email: 'namaste@anshgoyal.dev',
  location: 'Pune, India',
  taglines: [
    'Developer & Hacker',
    'Motorcycle Enthusiast',
    'Adrenaline Junkie',
    'Artist',
    'Building Small Tools',
  ],
  social: [
    { label: 'GitHub', abbr: 'GH', href: 'https://github.com/aghogwarts' },
    {
      label: 'LinkedIn',
      abbr: 'LI',
      href: 'https://www.linkedin.com/in/ansh-goyal/',
    },
    { label: 'Twitter', abbr: 'TW', href: 'https://twitter.com/anshg_' },
  ],
};

export const ABOUT = {
  bio: 'Restless mind wandering has taken me from sketching and painting, through robotics and mechanisms, all the way to programming, hacking, and AI. I believe that we get one life and I aspire to make the most of it :)',
  tags: [
    'Open Source',
    'CTF & Security',
    'Artist',
    'Avid Reader & Learner',
    'Adrenaline Junkie',
  ],
  stats: [
    { value: '10+', label: 'Languages' },
    { value: '30+', label: 'Projects' },
    { value: '∞', label: 'Curiosity' },
  ],
};

export const SKILLS = [
  {
    category: 'Languages',
    abbr: 'LG',
    items: [
      'Python',
      'Go',
      'C/C++',
      'Bash',
      'Assembly, Embedded C',
      'JavaScript',
      'SQL',
      'C#',
      'HTML/CSS',
      'Java',
    ],
  },
  {
    category: 'Frameworks',
    abbr: 'FW',
    items: [
      'Langchain',
      'Langgraph',
      'Electron',
      'Node.js',
      'Django',
      'Flask',
      'React',
      'Svelte',
      'Flutter',
    ],
  },
  {
    category: 'Tools & DevOps',
    abbr: 'OPS',
    items: [
      'Git',
      'Docker',
      'Linux',
      'Nginx',
      'CI/CD',
      'AWS',
      'GCP',
      'Azure',
      'Kubernetes',
      'Postman',
    ],
  },
];

export const PROJECTS = [
  {
    title: 'Gitcal',
    description:
      'A local-first Git activity calendar for the terminal, with repository discovery, identity filters, an interactive TUI, and cross-platform releases.',
    tags: ['Go', 'TUI', 'Git', 'CI/CD'],
    href: 'https://github.com/aghogwarts/gitcal',
    featured: false,
  },
  {
    title: 'Torque Assistant',
    description:
      'An AI-assisted incident workflow for automobile assembly torque events, combining RAG, trend detection, structured decisions, and an operator dashboard.',
    tags: ['Python', 'LangGraph', 'RAG', 'Streamlit'],
    href: 'https://github.com/aghogwarts/torque-assistant',
    featured: true,
  },
  {
    title: 'iRiver IFP for macOS',
    description:
      'A tested build and troubleshooting guide for using legacy iRiver IFP music players on modern macOS through the reverse-engineered libifp driver.',
    tags: ['macOS', 'USB', 'Shell', 'Hardware'],
    href: 'https://github.com/aghogwarts/iriver',
    featured: true,
  },
  {
    title: 'IOC Scraper',
    description:
      'A cybersecurity utility that extracts and refangs indicators of compromise from web pages, then exports a concise, analysis-ready CSV.',
    tags: ['Python', 'Cybersecurity', 'OSINT', 'Web Scraping'],
    href: 'https://github.com/aghogwarts/ioc-scraper',
    featured: false,
  },
  {
    title: 'Embedded Health Monitor',
    description:
      'An LPC1768-based health-monitoring prototype integrating temperature, heart-rate, and SpO2 sensors through ADC, I2C, and an LCD interface.',
    tags: ['Embedded C', 'LPC1768', 'I2C', 'Sensors'],
    href: 'https://github.com/aghogwarts/ESD_Lab/tree/main/Project',
    featured: true,
  },
  {
    title: 'Digit RSS Tracker',
    description:
      "A lightweight VPS automation that monitors an author's RSS feed, remembers previously seen articles, and sends phone alerts through ntfy.",
    tags: ['Python', 'RSS', 'Cron', 'ntfy'],
    href: 'https://github.com/aghogwarts/digit-rss-tracker',
    featured: false,
  },
];

export const HOBBIES = [
  {
    abbr: 'MR',
    label: 'Motorcycles',
    accent: '#FF6B35',
    desc: 'I love motorcycle riding, mechanics, and everything in between. They are perfect blend of adrenaline and engineering. I respect the machine and love the control and freedom it gives me.',
  },
  {
    abbr: 'FT',
    label: 'Fitness',
    accent: '#4FC3F7',
    desc: 'Consistent training till failure. Physical discipline feeds directly into mental sharpness. I enjoy weightlifting, MMA, and calisthenics.',
  },
  {
    abbr: 'SP',
    label: 'Side Projects',
    accent: '#A5D6A7',
    desc: "I love building small tools and projects to learn everything new that comes along my way. It's a great way to stay curious and keep my skills sharp.",
  },
  {
    abbr: 'RD',
    label: 'Reading',
    accent: '#CE93D8',
    desc: 'Philosophy, History and Geopolitics. I strive to find my own meaning in things by questioning and reading helps me do that. It also gives me a much needed break from screens :)',
  },
  {
    abbr: 'CM',
    label: 'Cinema',
    accent: '#FFD54F',
    desc: 'Thrillers, Philosophical, Science Fiction and Action. I love movies that connect with me on a deeper level. Hardcore Good Will Hunting and Dead Poets Society enthusiast :)',
  },
];
