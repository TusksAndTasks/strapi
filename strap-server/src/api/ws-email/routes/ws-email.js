'use strict';

/**
 * ws-email router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::ws-email.ws-email');
