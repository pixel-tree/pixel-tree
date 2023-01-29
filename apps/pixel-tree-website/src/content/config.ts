import { defineCollection, z } from "astro:content";
import { blogTags } from "./tags";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    locale: z.enum(["es", "en"]).default("es"),
    date: z
      .string()
      .transform((str) => new Date(str))
      .default(() => new Date().toISOString()),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tag: z.nativeEnum(blogTags),
    isDraft: z.boolean().default(false),
    author: z.object({
      name: z.string().default("Pixel Tree"),
      url: z.string().optional(),
    }),
    // author: z.string().default('Pixel Tree'),
    description: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
