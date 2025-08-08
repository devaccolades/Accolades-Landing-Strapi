// src/api/seo/routes/seo.ts

import { factories } from '@strapi/strapi';

module.exports = factories.createCoreRouter('api::seo.seo', {
  // @ts-expect-error - 'routes' is not typed but works at runtime
  routes: [
    {
      method: 'POST',
      path: '/seos/fetch-by-page',
      handler: 'seo.findByPage',
      config: {
        auth: false,
      },
    },
  ],
});
