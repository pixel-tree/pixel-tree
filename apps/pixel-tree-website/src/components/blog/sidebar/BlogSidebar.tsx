import type { BlogSidebarItemProps, BlogSidebarProps } from './sidebar.types'

const BlogSidebarItem = ({ item }: BlogSidebarItemProps) => {
  return (
    <li
    className='pl-5'
    >
      <a
      href={`/blog/${item.tag}`}
      className={`
        text-lg
        ${item.isSelected ? 'text-white' : 'text-gray-400'}
      `}
      >
        {
          // TODO: capitalize first letter
          `${item.tag}  (${item.count})`
        }
      </a>
    </li>
  )
}

export const BlogSidebar = ({ items }: BlogSidebarProps) => {
  return (
    <aside className="w-[200px] border-r-gray-600 h-[calc(100vh-80px)] fixed left-0 top-20 border-r-2">
        <ul
          className='
            flex
            flex-col
            gap-y-4
          '
        >
          {
            items.map((item, index) => (
              <BlogSidebarItem key={index} item={item} />
            ))
          }
        </ul>
    </aside>
  )
}
