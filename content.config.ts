import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      source: '**/*.md',
      type: 'page',
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date()
      })
    }),
    blog: defineCollection({
      source: 'blog/*.md',
      type: 'page',
      // Define custom schema for docs collection
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date()
      })
    })
  }
})
