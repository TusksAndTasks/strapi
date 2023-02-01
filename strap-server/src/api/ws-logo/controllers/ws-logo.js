'use strict';

/**
 * ws-logo controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ws-logo.ws-logo',({strapi}) => ({
    async find(ctx){
      const data = await strapi.db.query('api::ws-logo.ws-logo').findOne({
        populate: ['deep']
      })
      return { data }
    }
  })
  );
