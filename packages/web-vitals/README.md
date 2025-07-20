# @studiocms/web-vitals

[![NPM Version](https://img.shields.io/npm/v/@studiocms/web-vitals)](https://npm.im/@studiocms/web-vitals)
[![Formatted with Biome](https://img.shields.io/badge/Formatted_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev/)
[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)

This **[Astro integration][astro-integration]** enables tracking real-world website performance and storing the data in [Astro DB][db].

`@studiocms/web-vitals` is a fork of the `@astrojs/web-vitals` package originally provided by the WithAstro organization for the Astro Studio product offering they have since sunset. StudioCMS was asked to takeover this package due to our integration of this package within StudioCMS for vitals and analytics reporting.

## Pre-requisites

- [Astro DB](https://astro.build/db) — `@studiocms/web-vitals` will store performance data in Astro DB in production
- [An SSR adapter](https://docs.astro.build/en/guides/server-side-rendering/) — `@studiocms/web-vitals` injects a server endpoint to manage saving data to Astro DB

## Installation

1. Install and configure the Web Vitals integration using `astro add`:

   ```sh
   npx astro add @studiocms/web-vitals
   ```

2. Push the tables added by the Web Vitals integration to Astro DB Database:

   ```sh
   npx astro db push
   ```

3. Redeploy your site.

4. Your data will now be stored within your db!

Learn more about [Astro DB](https://docs.astro.build/en/guides/astro-db/) in the Astro docs.

## Migrating from `@astrojs/web-vitals`

Migrating is super easy, just replace the entries in your `package.json` and `astro.config.*` files with the new name `@studiocms/web-vitals` and your good to go! We have not changed any of the table structures or variables as it's simply not needed as this project worked perfectly beforehand.

## Uninstalling

To remove the Web Vitals integration, follow the Astro DB deprecation process:

1. Mark the integration as deprecated in `astro.config.mjs`, by setting the `deprecated` option to `true`:

   ```js
   import db from '@astrojs/db';
   import webVitals from '@studiocms/web-vitals';
   import { defineConfig } from 'astro/config';

   export default defineConfig({
     integrations: [
       db(),
       // Mark the web vitals integration as deprecated:
       webVitals({ deprecated: true }),
     ],
     // ...
   });
   ```

2. Push the deprecation to Astro DB Database:

   ```sh
   npx astro db push
   ```

3. Remove the web vitals integration in `astro.config.mjs`:

   ```diff
   import db from '@astrojs/db';
   - import webVitals from '@studiocms/web-vitals';
   import { defineConfig } from 'astro/config';

   export default defineConfig({
     integrations: [
       db(),
   -   webVitals({ deprecated: true }),
     ],
     // ...
   });
   ```

4. Push the table deletion to Astro DB Database:

   ```sh
   npx astro db push
   ```

## Support

- Get help in the [StudioCMS Discord][discord]. Post questions in our `#support` forum, or visit our dedicated `#contribute` channel to discuss current development and more!

- Check the [Astro Integration Documentation][astro-integration] for more on integrations.

- Submit bug reports and feature requests as [GitHub issues][issues].

## License

MIT

Copyright (c) 2023–present [Astro][astro] - Modified by StudioCMS 2025

[astro]: https://astro.build/
[db]: https://astro.build/db/
[discord]: https://chat.studiocms.dev
[issues]: https://github.com/withstudiocms/web-vitals/issues
[astro-integration]: https://docs.astro.build/en/guides/integrations-guide/
