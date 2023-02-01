'use strict';

/**
 * ws-logo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ws-logo.ws-logo');
