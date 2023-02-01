'use strict';

/**
 * feature controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::feature.feature', ({strapi}) => ({
  async find(ctx){
    const data = await strapi.db.query('api::feature.feature').findMany({
      populate: ['deep']
    })
    return { data }
  }
})
);
