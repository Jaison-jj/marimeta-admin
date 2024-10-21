'use strict';

/**
 * meet-the-director service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::meet-the-director.meet-the-director');
