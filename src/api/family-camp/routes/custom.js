module.exports = {
  routes: [
    {
      method: "POST",
      path: "/req-additional-info",
      handler: "family-camp.requestAdditionalInfo ",
      config: {
        auth: false,
      },
    },
    {
        method: "POST",
        path: "/rsvp",
        handler: "family-camp.rsvp ",
        config: {
          auth: false,
        },
      },
  ],
};
