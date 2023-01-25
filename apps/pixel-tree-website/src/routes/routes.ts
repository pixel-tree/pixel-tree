export interface Route {
  name: string;
  path: string;
}

// Path: apps/pixel-tree-website/src/components/navbar/routes.ts

export const navRoutes: Route[] = [
  {
    name: "Acerca",
    path: "/",
  },
  {
    name: "Blog",
    path: "/about",
  },
  {
    name: "Contacto",
    path: "/contact",
  },
];
