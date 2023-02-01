'use strict';

/**
 * ws-email controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ws-email.ws-email', ({strapi}) => ({
  async find(ctx){
    const data = await strapi.db.query('api::ws-email.ws-email').findOne({
      populate: ['deep']
    })
    return { data }
  }
})
);
