export interface Route {
  name: string
  path: string
}

// Path: apps/pixel-tree-website/src/components/navbar/routes.ts

export const navRoutes: Route[] = [
  {
    name: 'Acerca',
    path: '/'
  },
  {
    name: 'Blog',
    path: '/blog'
  },
  {
    name: 'Contacto',
    path: '/contact'
  }
]
