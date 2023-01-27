
import type { CollectionEntry } from 'astro:content'

interface Props {
  post: CollectionEntry<'blog'>
}
export const BlogCard = ({ post }: Props) => {
  return (
    <article className='text-white' >
        <h2>{post.data.title}</h2>
        <a href={`/blog/${post.slug}`}>Ir</a>
    </article>
  )
}
