import type { CollectionEntry } from 'astro:content'
import { BlogCard } from './BlogCard'

interface Props {
  posts: Array<CollectionEntry<'blog'>>
}

export const BlogGrid = ({ posts }: Props) => {
  return (
    <section>
        {
            posts.map((post) => (
                <BlogCard post={post} key={post.id} />
            ))
        }
    </section>
  )
}
