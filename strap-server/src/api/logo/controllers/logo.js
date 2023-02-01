'use strict';

/**
 * logo controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::logo.logo', ({strapi}) => ({
  async find(ctx){
    const data = await strapi.db.query('api::logo.logo').findOne({
      populate: ['deep']
    })
    return { data }
  }
})
);
