'use strict';

/**
 * ws-email service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ws-email.ws-email');
