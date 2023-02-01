'use strict';

/**
 * review controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::review.review', ({strapi}) => ({
  async find(ctx){
    const data = await strapi.db.query('api::review.review').findMany({
      populate: ['deep']
    })
    return { data }
  }
})
);
