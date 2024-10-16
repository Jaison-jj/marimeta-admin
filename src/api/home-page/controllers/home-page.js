"use strict";

/**
 * home-page controller
 */

// @ts-ignore
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::home-page.home-page",
  ({ strapi }) => ({
    async customAction(ctx) {
      try {
        await strapi.plugin('email').service('email').send({
            to: 'jaison.john@ileafsolutions.com',
            from: 'jaison.john@ileafsolutions.com',
            subject: 'Hello world',
            text: 'Hello world',
            html: `<h4>Hello world</h4>`,
          })
          ctx.send({ message: "Email sent successfully" });
      } catch (error) {
        ctx.body = error;
      }
    },
  })
);
