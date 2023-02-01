'use strict';

/**
 * team-member controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::team-member.team-member', ({strapi}) => ({
    async find(ctx){
      const data = await strapi.db.query('api::team-member.team-member').findMany({
        populate: ['deep']
      })
      return { data }
    }

  })
);
