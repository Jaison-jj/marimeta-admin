"use strict";

/**
 * home-page controller
 */

// @ts-ignore
const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::home-page.home-page",
  ({ strapi }) => ({
    async contactUs(ctx) {
      try {
        console.log(ctx.request.body);
        await strapi
          .plugin("email")
          .service("email")
          .send({
            to: ["jaison.john@ileafsolutions.com"],
            from: "jaison.john@ileafsolutions.com",
            subject: "NEW CONTACT REQUEST",
            text: "New contact request",
            html: `
                  <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px;">
                    <h2 style="color: #0056b3;">New Contact Request</h2>
                    <p><strong>First Name:</strong> ${ctx.request.body.firstName}</p>
                    <p><strong>Last Name:</strong> ${ctx.request.body.lastName}</p>
                    <p><strong>Email:</strong> ${ctx.request.body.email}</p>
                    <p><strong>Phone Number:</strong> ${ctx.request.body.phoneNumber}</p>
                    <p><strong>Source:</strong> ${ctx.request.body.source}</p>
                    <p><strong>Message:</strong></p>
                    <p style="background-color: #f9f9f9; padding: 10px; border-radius: 5px;">${ctx.request.body.message}</p>
                    <p style="color: #777; font-size: 12px; margin-top: 20px;">This message was sent from your website's contact form.</p>
                  </div>`,
          });
        ctx.send({ message: "Email sent successfully" });
      } catch (error) {
        ctx.body = error;
      }
    },
  })
);
