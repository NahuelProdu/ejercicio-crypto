const cryptoSchema = require("../schemas/crypto.schema");
const config = require("../../config/environment");
const mongoose = require("mongoose");

const findData = (cripto) => {
    mongoose.connect(config.mongo.uri, config.mongo.options);
    if(!cripto) {
        return cryptoSchema.find()
    }
    let coinUpper = cripto.toUpperCase();
    return cryptoSchema.find({ acronym: coinUpper })
    // TODO: En que momento cierro la conexion?
}

module.exports = findData