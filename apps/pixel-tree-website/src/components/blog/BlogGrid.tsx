import type { CollectionEntry } from 'astro:content'
import { BlogCard } from './card/BlogCard'

interface Props {
  posts: Array<CollectionEntry<'blog'>>
}

export const BlogGrid = ({ posts }: Props) => {
  return (
    <section
      className="
      fixed
      top-20
      left-[200px]
      grid
      h-[calc(100vh-80px)]
      w-[calc(100vw-200px)]
      grid-cols-1
      gap-8
      overflow-y-scroll
      px-10 pb-10
      md:grid-cols-md-blog-cards md:gap-y-12
      "
    >
      {posts.map((post) => (
        <BlogCard post={post} key={post.id} />
      ))}
    </section>
  )
}
