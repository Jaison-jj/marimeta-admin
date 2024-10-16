module.exports = ({ env }) => ({
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.gmail.com'),
          port: env('SMTP_PORT', 587),
          auth: {
            user: 'jaison.john@ileafsolutions.com',
            pass: 'zmdn lrpd gged wvlq',
          },
        },
        settings: {
          defaultFrom: 'hello@example.com',
          defaultReplyTo: 'hello@example.com',
        },
      },
    },
  });