var express = require("express");
var controller = require("./test.controller");
var router = express.Router();

router.get("/", controller.register);
router.get("/:average", controller.average);
router.delete("/", controller.delete);

module.exports = router;