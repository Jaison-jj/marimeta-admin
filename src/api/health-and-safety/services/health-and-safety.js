'use strict';

/**
 * health-and-safety service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::health-and-safety.health-and-safety');
