import { getCollection } from 'astro:content'

export const getSortedPosts = async () => {
  const posts = await getCollection('blog')
  return posts.sort((a, b) => {
    return a.data.date > b.data.date ? -1 : 1
  })
}
