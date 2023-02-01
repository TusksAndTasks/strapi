'use strict';

/**
 * data-number controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::data-number.data-number', ({strapi}) => ({
  async find(ctx){
    const data = await strapi.db.query('api::data-number.data-number').findMany({
      populate: ['deep']
    })
    return { data }
  }
})
);
