'use strict';

/**
 * title-data controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::title-data.title-data', ({strapi}) => ({
  async find(ctx){
    const data = await strapi.db.query('api::title-data.title-data').findOne({
      populate: ['deep']
    })
    return { data }
  }

})
);

