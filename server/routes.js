var errors = require("./components/errors");

module.exports = (app) => {
  app.use("/api/coins", require("./api/coins"));
  app.route("/:url(api|components|app|bower_components|assets)/*").get(errors[404]);
};