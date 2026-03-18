import { defineCollection, z } from "astro:content";

const trips = defineCollection({
  type: "content",
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
