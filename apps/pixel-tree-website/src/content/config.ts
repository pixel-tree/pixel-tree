
import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    // slug: z.string(),
    date: z.string().transform(str => new Date(str)),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }).optional(),
    tags: z.array(z.string()).optional(),
    isDraft: z.boolean().default(false),
    author: z.string().default('Pixel Tree')
  })
})

export const collections = {
  blog: blogCollection
}
