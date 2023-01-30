import { getCollection } from 'astro:content'
import type { BlogSidebarItem } from '../components/blog/sidebar'
import { blogTags } from '../content/config'

interface GetSidebarItemsParams {
  currentTag?: string
}

export const getSidebarItems = async ({ currentTag }: GetSidebarItemsParams) => {
// Get all tags and their count
  const blogPosts = await getCollection('blog')

  const items: BlogSidebarItem[] = blogTags.map((tag) => {
    const posts = blogPosts.filter((post) => post.data.tag.includes(tag))
    return {
      tag,
      count: posts.length,
      isSelected: currentTag === tag
    }
  })
  return items
}
