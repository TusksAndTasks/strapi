'use strict';

/**
 * developer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::developer.developer', ({strapi}) => ({
  async find(ctx){
    const data = await strapi.db.query('api::developer.developer').findOne({
      populate: ['deep']
    })
    return { data }
  }

})
);
