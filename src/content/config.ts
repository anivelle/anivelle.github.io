import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({ 
    type: 'content', 
    schema: z.object({
      title: z.string(), 
      brief: z.string().optional()
  })
})

export const collections = {
  'blog': blogCollection,
}
