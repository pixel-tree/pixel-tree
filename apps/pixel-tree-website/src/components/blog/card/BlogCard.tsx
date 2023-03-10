import type { CollectionEntry } from 'astro:content'
import { Tag } from '../tag'

interface Props {
  post: CollectionEntry<'blog'>
}
export const BlogCard = ({ post }: Props) => {
  return (
    <article
      className="
      group
      flex
      flex-col
      gap-y-2
      text-white
      max-w-[500px]
      "
    >
     <a
      href={`/blog/${post.slug}`}
      className="flex flex-col gap-y-2"
      >
      <div className="relative aspect-[2.25/1] w-full overflow-hidden rounded-xl border border-black border-opacity-10">
        <img
          className="object-cover transition-transform group-hover:scale-[1.05]"
          src={post.data.image.url}
          alt={post.data.image.alt}
        />
      </div>
      <Tag tag={post.data.tag} />
      <h2 className="hover: text-2xl font-bold text-white">
        {post.data.title}
      </h2>
      {Boolean(post.data.description) && (
        <h2 className="text-lg font-light text-gray-400">
          {post.data.description}
        </h2>
      )}
     </a>
     <a
      href={post.data.author.profileUrl}
      className="flex flex-col gap-y-2"
     >
      <div className="flex flex-row gap-x-2">
        <img
          className="h-8 w-8 rounded-full"
          src={post.data.author.imgUrl}
          alt="avatar"
        />
        <div className="flex flex-col">
          <h3 className="text-sm font-semibold text-white">
            {post.data.author.name}
          </h3>
          <h3 className="text-sm font-light text-gray-500">
            {new Date(post.data.date).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </h3>
        </div>
      </div>
     </a>
    </article>
  )
}
