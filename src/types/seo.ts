export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile' | 'business.business';
  locale?: string;
  alternateLocales?: Array<{ locale: string; url: string }>;
}

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}
