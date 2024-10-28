'use strict';

/**
 * health-and-safety router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::health-and-safety.health-and-safety');
