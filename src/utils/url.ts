/**
 * URL utilities for handling base path in development and production
 */

const BASE_URL = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * Creates a URL with the correct base path
 * @param path - The path (with or without leading slash)
 * @returns Full path with base URL
 */
export function withBase(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // Return base + path
  return BASE_URL ? `${BASE_URL}${cleanPath}` : cleanPath;
}

/**
 * Creates a localized URL with the correct base path
 * @param path - The path (with or without leading slash)
 * @param locale - The locale code (e.g., 'en', 'ml')
 * @returns Full path with base URL and locale
 */
export function withLocale(path: string, locale: string): string {
  if (locale === 'en') {
    return withBase(path);
  }

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return withBase(`/${locale}/${cleanPath}`);
}

/**
 * Gets an asset URL with the correct base path
 * @param assetPath - Path to asset in public folder (e.g., '/images/logo.png')
 * @returns Full asset path with base URL
 */
export function assetUrl(assetPath: string): string {
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  return BASE_URL ? `${BASE_URL}/${cleanPath}` : `/${cleanPath}`;
}
