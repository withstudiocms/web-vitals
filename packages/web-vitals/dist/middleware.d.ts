import type { MiddlewareHandler } from 'astro';
/**
 * Middleware which adds the web vitals `<meta>` tag to each page’s `<head>`.
 *
 * @example
 * <meta name="x-astro-vitals-route" content="/blog/[slug]" />
 */
export declare const onRequest: MiddlewareHandler;
