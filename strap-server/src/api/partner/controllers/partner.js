'use strict';

/**
 * partner controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::partner.partner', ({strapi}) => ({
  async find(ctx){
    const data = await strapi.db.query('api::partner.partner').findMany({
      populate: ['deep']
    })
    return { data }
  }
})
);
