
import { defineCollection, z } from 'astro:content'

export const blogTags = [
  'experiencias',
  'recursos',
  'tutoriales',
  'noticias'
] as const

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    locale: z.enum(['es', 'en']).default('es'),
    date: z
      .string()
      .transform((str) => new Date(str))
      .default(() => new Date().toISOString()),
    image: z.object({
      url: z.string(),
      alt: z.string()
    }),
    tag: z.enum(blogTags),
    isDraft: z.boolean().default(false),
    author: z.object({
      name: z.string(),
      url: z.string().optional()
    }).optional().default({ name: 'Pixel Tree', url: 'https://avatars.githubusercontent.com/u/115965930?s=400&u=1a3d7eb93f445688945c8c20fb781d7bee62965d&v=4' }),
    description: z.string().optional()
  })
})

export const collections = {
  blog: blogCollection
}
