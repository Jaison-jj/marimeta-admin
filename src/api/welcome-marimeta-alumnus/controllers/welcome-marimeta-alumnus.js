// @ts-nocheck
"use strict";

/**
 * welcome-marimeta-alumnus controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::welcome-marimeta-alumnus.welcome-marimeta-alumnus",
  ({ strapi }) => ({
    async sendPhotos(ctx) {
      const { files } = ctx.request;
      const { firstName, lastName, email, ownership } = ctx.request.body;

      const attachments = Object.values(files).map((file) => ({
        filename: file.originalFilename,
        path: file.filepath,
        contentType: file.mimetype,
      }));

      try {
        await strapi
          .plugin("email")
          .service("email")
          .send({
            to: ["jaison.john@ileafsolutions.com"],
            from: "jaison.john@ileafsolutions.com",
            subject: `New photos from ${firstName} ${lastName}`,
            text: "Photos attached.",
            html: `
                    <div style="font-family: Arial, sans-serif; color: #333;">
                        <h2 style="color: #4CAF50;">New Photos Submission</h2>
                        <p><strong>From:</strong> ${firstName} ${lastName}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Ownership:</strong> ${ownership}</p>
                        <p style="margin-top: 20px;">Please find the attached photos below.</p>
                        <footer style="margin-top: 30px; font-size: 12px; color: #777;">
                        <p>Best regards,<br>${firstName} ${lastName}</p>
                        </footer>
                    </div>
                    `,
            attachments: attachments,
          });
        ctx.send({ message: "Email sent successfully" });
      } catch (error) {
        ctx.body = error;
      }
    },
  })
);
