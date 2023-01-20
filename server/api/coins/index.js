var express = require("express");
var controller = require("./coin.controller");
var router = express.Router();

//TODO: Cambiar nombre de register - Poner la moneda en la URL
router.get("/", controller.data);
router.get("/:average", controller.average);
router.delete("/:acronym", controller.delete);

module.exports = router;