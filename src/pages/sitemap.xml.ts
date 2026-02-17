import type { APIRoute } from 'astro';
import { getAllBusinessConfigs } from '../utils/getBusinessConfig';

const SITE_URL = 'https://nijojo.com';
const LOCALES = ['en', 'ml'];

export const GET: APIRoute = async () => {
  const businesses = getAllBusinessConfigs();

  // Generate URLs for all pages
  const urls: Array<{ loc: string; priority: number }> = [];

  // Homepage
  urls.push({ loc: `${SITE_URL}/`, priority: 1.0 });
  urls.push({ loc: `${SITE_URL}/ml`, priority: 1.0 });

  // Business pages
  businesses.forEach(business => {
    // English
    urls.push({
      loc: `${SITE_URL}/${business.slug}`,
      priority: 0.8
    });

    // Malayalam
    urls.push({
      loc: `${SITE_URL}/ml/${business.slug}`,
      priority: 0.8
    });

    // Service pages
    business.services.forEach(service => {
      // English
      urls.push({
        loc: `${SITE_URL}/${business.slug}/services/${service.slug}`,
        priority: 0.6
      });

      // Malayalam
      urls.push({
        loc: `${SITE_URL}/ml/${business.slug}/services/${service.slug}`,
        priority: 0.6
      });
    });
  });

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
