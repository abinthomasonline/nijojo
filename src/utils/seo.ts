import type { SEOConfig, StructuredData } from '../types/seo';

export function generateMetaTags(config: SEOConfig) {
  const tags: Record<string, string> = {
    title: config.title,
    description: config.description,
  };

  if (config.canonical) {
    tags.canonical = config.canonical;
  }

  if (config.noindex) {
    tags.robots = 'noindex, nofollow';
  }

  return tags;
}

export function generateStructuredData(data: StructuredData | StructuredData[]): string {
  return JSON.stringify(data, null, 2);
}

export function generateBreadcrumbs(items: Array<{ name: string; url: string }>): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
}
