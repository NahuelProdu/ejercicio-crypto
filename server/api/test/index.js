var express = require("express");
var controller = require("./test.controller");
var config = include("config/environment");
var router = express.Router();

router.get("/", controller.test);


module.exports = router;