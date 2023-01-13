var errors = require("./components/errors");

module.exports = (app) => {
  app.use("/api/test", require("./api/test"));
  app.route("/:url(api|components|app|bower_components|assets)/*").get(errors[404]);
};