'use strict';

/**
 * our-food service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-food.our-food');
