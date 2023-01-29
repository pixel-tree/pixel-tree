
import type { CollectionEntry } from 'astro:content'

interface Props {
  post: CollectionEntry<'blog'>
}
export const BlogCard = ({ post }: Props) => {
  return (
    <article
      className='
      text-white
      w-full
      flex
      flex-col
      gap-y-2
      '
    >
      <div className='h-[180px] flex justify-center items-center '>
        <img className='max-h-full w-full rounded-xl' src={post.data.image.url} alt={post.data.image.alt} />
      </div>
        {/* TODO: post tag chip */}
        <h2 className='text-white text-xl font-bold'>{post.data.title}</h2>
        {
            (Boolean(post.data.description)) && (
              <h2 className='text-gray-500 text-lg'>{post.data.description }</h2>
            )
        }
        {/* TODO: author */}

        {/* TODO: Determine the route to access the post */}
        {/* <a href={`/blog/${post.data.tag}/${post.slug}`}>Ir</a> */}
        <a href={`/blog/${post.slug}`}>Ir</a>
    </article>
  )
}
