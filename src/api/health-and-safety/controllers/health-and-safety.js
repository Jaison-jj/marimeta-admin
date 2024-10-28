'use strict';

/**
 * health-and-safety controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::health-and-safety.health-and-safety');
