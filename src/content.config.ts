import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const trips = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/trips" }),
  schema: z.object({
    title: z.string(),
    city: z.string(),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    km: z.number().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { trips };
