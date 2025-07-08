# @studiocms/web-vitals

This **[Astro integration][astro-integration]** enables tracking real-world website performance and storing the data in [Astro DB][db].

## Pre-requisites

- [Astro DB](https://astro.build/db) — `@studiocms/web-vitals` will store performance data in Astro DB in production
- [An SSR adapter](https://docs.astro.build/en/guides/server-side-rendering/) — `@studiocms/web-vitals` injects a server endpoint to manage saving data to Astro DB

## Installation

1. Install and configure the Web Vitals integration using `astro add`:

   ```sh
   npx astro add @studiocms/web-vitals
   ```

2. Push the tables added by the Web Vitals integration to Astro Studio:

   ```sh
   npx astro db push
   ```

3. Redeploy your site.

4. Your data will now be stored within your db!

Learn more about [Astro DB](https://docs.astro.build/en/guides/astro-db/) and [deploying with Astro Studio](https://docs.astro.build/en/guides/astro-db/#astro-studio) in the Astro docs.

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

2. Push the deprecation to Astro Studio:

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

4. Push the table deletion to Astro Studio:

   ```sh
   npx astro db push
   ```

## Support

- Get help in the [StudioCMS Discord][discord]. Post questions in our `#support` forum, or visit our dedicated `#dev` channel to discuss current development and more!

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
