import type { CollectionEntry } from 'astro:content'

export const defaultSiteData = {
  title: 'Pixel Tree',
  description: 'Pixel Tree Website',
  image: {
    url: '/default-site.jpg',
    alt: 'Default pixel tree image'
  }

}

interface JsonLDGeneratorProps {
  type: 'post' | 'site'
  post: CollectionEntry<'blog'>
  url: string
}

export default function jsonLDGenerator ({ type, post, url }: JsonLDGeneratorProps) {
  if (type === 'post') {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.data.title}",
        "description": "${post.data.description ?? 'No description'}",
        "image": "${post.data.image.url}",
        "author": {
          "@type": "Person",
          "name": "${post.data.author.name}",
          "url": "${post.data.author.profileUrl}"
        },
        "datePublished": "${post.data.date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}"
      }
    </script>`
  }
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${defaultSiteData.title}",
      "url": "${import.meta.env.SITE as string}",
      }
    </script>`
}
