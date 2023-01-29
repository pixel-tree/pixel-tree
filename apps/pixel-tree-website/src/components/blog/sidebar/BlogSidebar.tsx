import { capitalize } from "../../../utils";
import type { BlogSidebarItemProps, BlogSidebarProps } from "./sidebar.types";

const BlogSidebarItem = ({ item }: BlogSidebarItemProps) => {
  return (
    <li className="pl-5">
      <a
        href={`/blog/${item.tag}`}
        className={`
        text-lg
        ${item.isSelected ? "text-white" : "text-gray-400"}
      `}
      >
        {
          // TODO: capitalize first letter
          // Done ✅
          `${capitalize(item.tag)}  (${item.count})`
        }
      </a>
    </li>
  );
};

export const BlogSidebar = ({ items }: BlogSidebarProps) => {
  return (
    <aside className="fixed left-0 top-20 h-[calc(100vh-100px)] mt-5 w-[200px] border-r-[0.5px] border-r-[#C4C4C4]/50">
      <ul
        className="
            flex
            flex-col
            gap-y-11
            pl-5
          "
      >
        {items.map((item, index) => (
          <BlogSidebarItem key={index} item={item} />
        ))}
      </ul>
    </aside>
  );
};
