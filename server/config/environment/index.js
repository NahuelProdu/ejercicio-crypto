const _ = require('lodash')
const path = require("path");

try {
  require("./" + process.env.NODE_ENV);
} catch (error) {
}

_.assign(process.env, (() => { try { return require("../local.env"); } catch (error) {} })());

module.exports = {
  env: process.env.NODE_ENV,
  root: path.normalize(__dirname + "/../../.."),
  seedDB: false,
  port: process.env.PORT || 9001,
  secrets: {
    session: process.env.SESSION_SECRET || "secret"
  },
  mongo: {
    uri: process.env.MONGO_URI
  },
  api: {
    uri: process.env.API_URI,
    token: process.env.API_TOKEN,
    token_2: process.env.API_TOKEN_2,
    coins: process.env.LIST_COINS,
  }
};
