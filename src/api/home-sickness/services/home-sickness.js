'use strict';

/**
 * home-sickness service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-sickness.home-sickness');
