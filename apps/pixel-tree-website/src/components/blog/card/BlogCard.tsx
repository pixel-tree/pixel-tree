import type { CollectionEntry } from "astro:content";
import { Tag } from "../tag";

interface Props {
  post: CollectionEntry<"blog">;
}
export const BlogCard = ({ post }: Props) => {
  return (
    <div
      className="
      group
      flex
      max-w-full
      flex-col
      gap-y-2
      text-white
      "
    >
      <div className="relative aspect-[2.25/1] w-full overflow-hidden rounded-xl border border-black border-opacity-10">
        <img
          className="object-cover transition-transform group-hover:scale-[1.05]"
          src={post.data.image.url}
          alt={post.data.image.alt}
        />
      </div>
      <Tag tag={post.data.tag} />
      {/* TODO: post tag chip */}
      <h2 className="hover: text-xl font-bold text-white">{post.data.title}</h2>
      {Boolean(post.data.description) && (
        <h2 className="text-lg text-gray-500">{post.data.description}</h2>
      )}
      {/* TODO: author */}

      {/* TODO: Determine the route to access the post */}
      {/* <a href={`/blog/${post.data.tag}/${post.slug}`}>Ir</a> */}
      <a href={`/blog/${post.slug}`}>Ir</a>
    </div>
  );
};
