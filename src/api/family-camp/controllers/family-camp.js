"use strict";

/**
 * family-camp controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::family-camp.family-camp",
  ({ strapi }) => ({
    async requestAdditionalInfo(ctx) {
      try {
        await strapi
          .plugin("email")
          .service("email")
          .send({
            to: ["jaison.john@ileafsolutions.com"],
            from: "jaison.john@ileafsolutions.com",
            subject: "NEW ADDITIONAL INFO REQUEST",
            text: "New additional info request",
            html: `
                  <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px;">
                    <h2 style="color: #0056b3;">NEW ADDITIONAL INFO REQUEST</h2>
                    <p><strong>First Name:</strong> ${ctx.request.body.firstName}</p>
                    <p><strong>Last Name:</strong> ${ctx.request.body.lastName}</p>
                    <p><strong>Email:</strong> ${ctx.request.body.email}</p>
                    <p><strong>Phone Number:</strong> ${ctx.request.body.phone}</p>
                    <p><strong>Source:</strong> ${ctx.request.body.brochure}</p>
                    <p style="color: #777; font-size: 12px; margin-top: 20px;">This message was sent from your website's request additional info form.</p>
                  </div>`,
          });
        ctx.send({ message: "Email sent successfully" });
      } catch (error) {
        ctx.body = error;
      }
    },
    async rsvp(ctx) {
      const {
        address2,
        children,
        city,
        email,
        parentsName,
        phone,
        state,
        streetAddress,
        zip,
      } = ctx.request.body;

      try {
        await strapi
          .plugin("email")
          .service("email")
          .send({
            to: ["jaison.john@ileafsolutions.com"],
            from: "jaison.john@ileafsolutions.com",
            subject: "NEW RSVP REQUEST",
            text: "New RSVP request",
            html: `<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px;">
                        <h2 style="color: #0056b3;">New RSVP Request</h2>
                        <p><strong>Parent's Name:</strong> ${parentsName}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Street Address:</strong> ${streetAddress}</p>
                        <p><strong>Address line 2:</strong>  ${address2}</p>
                        <p><strong>City:</strong>  ${city}</p>
                        <p><strong>State:</strong>  ${state}</p>
                        <p><strong>Zip:</strong>  ${zip}</p>
                        
                        <h3 style="color: #0056b3;">Children:</h3>
                        <table style="width: 100%; border-collapse: collapse; text-align: left;">
                        <thead>
                            <tr>
                            <th style="border-bottom: 1px solid #ddd; padding: 8px;">Name</th>
                            <th style="border-bottom: 1px solid #ddd; padding: 8px;">Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${children
                              .map(
                                (child) => `
                            <tr>
                                <td style="border-bottom: 1px solid #ddd; padding: 8px;">${child.childName}</td>
                                <td style="border-bottom: 1px solid #ddd; padding: 8px;">${child.age}</td>
                            </tr>
                            `
                              )
                              .join("")}
                        </tbody>
                        </table>
                        <p style="color: #777; font-size: 12px; margin-top: 20px;">This message was sent from your website's request RSVP form.</p>
                    </div>`,
          });
        ctx.send({ message: "Email sent successfully" });
      } catch (error) {
        ctx.body = error;
      }
    },
  })
);
