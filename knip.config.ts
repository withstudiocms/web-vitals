import type { KnipConfig } from 'knip';

const config: KnipConfig = {
	exclude: ['duplicates', 'optionalPeerDependencies'],
	workspaces: {
		'.': {
			ignoreDependencies: ['@changesets/config'],
			entry: ['.github/workflows/*.yml'],
		},
		'packages/test-scripts': {
			entry: ['cmd/**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}', 'index.{js,cjs,mjs,jsx,ts,cts,mts,tsx}'],
			project: ['**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}'],
		},
		'packages/web-vitals': {
			entry: [
				'src/**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}',
				'test/**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}',
			],
			project: ['**/*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}'],
			astro: {
				entry: ['src/**/*.astro'],
				project: ['src/**/*.astro'],
			},
		},
	},
};

export default config;
