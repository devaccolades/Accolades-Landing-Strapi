// src/api/seo/controllers/seo.ts

import { factories } from '@strapi/strapi';
import { Context } from 'koa';

module.exports = factories.createCoreController('api::seo.seo', ({ strapi }) => ({
  async findByPage(ctx: Context) {
    const { page } = ctx.request.body as { page?: string };

    if (!page) {
      return ctx.badRequest('Page parameter is required');
    }

    const seoEntry = await strapi.db.query('api::seo.seo').findOne({
      where: { page },
    });

    if (!seoEntry) {
      return ctx.notFound('No SEO data found for this page');
    }

    return ctx.send(seoEntry);
  },
}));
