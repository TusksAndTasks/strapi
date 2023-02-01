'use strict';

/**
 * data-number service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::data-number.data-number');
