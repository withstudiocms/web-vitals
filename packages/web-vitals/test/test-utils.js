import { loadFixture as baseLoadFixture } from '@inox-tools/astro-tests/astroFixture';

/** @typedef {import('@inox-tools/astro-tests/astroFixture').Fixture} Fixture */
/** @typedef {import('@inox-tools/astro-tests/astroFixture').DevServer} DevServer */

/** @type {typeof import('@inox-tools/astro-tests/astroFixture')['loadFixture']} */
export function loadFixture(inlineConfig) {
	if (!inlineConfig?.root) throw new Error("Must provide { root: './fixtures/...' }");

	// resolve the relative root (i.e. "./fixtures/tailwindcss") to a full filepath
	// without this, the main `loadFixture` helper will resolve relative to `packages/astro/test`
	return baseLoadFixture({
		...inlineConfig,
		root: new URL(inlineConfig.root, import.meta.url).toString(),
	});
}
