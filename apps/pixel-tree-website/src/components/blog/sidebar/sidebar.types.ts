export interface BlogSidebarProps {
  items: BlogSidebarItem[]
}

export interface BlogSidebarItemProps {
  item: BlogSidebarItem
}

export interface BlogSidebarItem {
  tag: string
  isSelected: boolean
  count: number
}
