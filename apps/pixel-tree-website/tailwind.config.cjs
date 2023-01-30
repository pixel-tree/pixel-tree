/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        badge: {
          experiencias: '#40C391',
          tutoriales: '#FA6767',
          recursos: '#FFA866',
          noticias: '#2084FF',
          fondo: '#181621'
        }
      },
      gridTemplateColumns: {
        'md-blog-cards': 'repeat(auto-fit, minmax(400px, 1fr))',
        'md-blog-2-cards': 'repeat(2, minmax(400px, 1fr))'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
