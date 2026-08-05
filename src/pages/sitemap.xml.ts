import type { APIRoute } from 'astro';
import { getAllBusinessConfigs, getBusinessConfig } from '../utils/getBusinessConfig';

interface LocalizedPage {
  en: string;
  ml: string;
}

function toAbsoluteUrl(path: string, siteUrl: URL): string {
  return new URL(path, siteUrl).href;
}

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ?? new URL('https://nijojohny.com');
  const pages: LocalizedPage[] = [{ en: '/', ml: '/ml/' }];

  getAllBusinessConfigs('en').forEach((business) => {
    const malayalamBusiness = getBusinessConfig(business.slug, 'ml');
    if (!malayalamBusiness) return;

    pages.push({
      en: `/${business.slug}/`,
      ml: `/ml/${malayalamBusiness.slug}/`
    });

    business.services.forEach((service) => {
      const malayalamService = malayalamBusiness.services.find(({ slug }) => slug === service.slug);
      if (!malayalamService) return;

      pages.push({
        en: `/${business.slug}/services/${service.slug}/`,
        ml: `/ml/${malayalamBusiness.slug}/services/${malayalamService.slug}/`
      });
    });
  });

  const entries = pages.flatMap((page) => [
    { path: page.en, alternate: page },
    { path: page.ml, alternate: page }
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.map(({ path, alternate }) => {
    const englishUrl = escapeXml(toAbsoluteUrl(alternate.en, siteUrl));
    const malayalamUrl = escapeXml(toAbsoluteUrl(alternate.ml, siteUrl));

    return `  <url>
    <loc>${escapeXml(toAbsoluteUrl(path, siteUrl))}</loc>
    <xhtml:link rel="alternate" hreflang="en-IN" href="${englishUrl}" />
    <xhtml:link rel="alternate" hreflang="ml-IN" href="${malayalamUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${englishUrl}" />
  </url>`;
  }).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
