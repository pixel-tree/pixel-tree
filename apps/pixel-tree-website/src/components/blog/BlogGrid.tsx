import type { CollectionEntry } from 'astro:content'
import { BlogCard } from './card/BlogCard'

interface Props {
  posts: Array<CollectionEntry<'blog'>>
}

export const BlogGrid = ({ posts }: Props) => {
  return (
    <section
      className='
      w-[calc(100vw-200px)]
      fixed
      top-20
      left-[200px]
      h-[calc(100vh-80px)]
      px-10
      grid
      grid-cols-3
      gap-5
      overflow-y-scroll
      '
    >
        {
            posts.map((post) => (
                <BlogCard post={post} key={post.id} />
            ))
        }
    </section>
  )
}
