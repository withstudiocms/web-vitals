import { defineDbIntegration } from '@astrojs/db/utils';
import { AstroError } from 'astro/errors';
import { WEB_VITALS_ENDPOINT_PATH } from './constants.js';

export default function webVitals({ deprecated }: { deprecated?: boolean } = {}) {
	process.env.DEPRECATE_WEB_VITALS = deprecated ? 'true' : undefined;
	return defineDbIntegration({
		name: '@studiocms/web-vitals',
		hooks: {
			'astro:db:setup'({ extendDb }) {
				extendDb({ configEntrypoint: '@studiocms/web-vitals/db-config' });
			},

			'astro:config:setup'({ addMiddleware, config, injectRoute, injectScript }) {
				if (!config.integrations.find(({ name }) => name === 'astro:db')) {
					throw new AstroError(
						'Astro DB integration not found.',
						'Run `npx astro add db` to install `@astrojs/db` and add it to your Astro config.',
					);
				}

				// Middleware that adds a `<meta>` tag to each page.
				addMiddleware({ entrypoint: '@studiocms/web-vitals/middleware', order: 'post' });
				// Endpoint that collects metrics and inserts them in Astro DB.
				injectRoute({
					entrypoint: '@studiocms/web-vitals/endpoint',
					pattern: `${WEB_VITALS_ENDPOINT_PATH}/[...any]`,
					prerender: false,
				});
				// Client-side performance measurement script.
				injectScript('page', `import '@studiocms/web-vitals/client-script';`);
			},
		},
	});
}
