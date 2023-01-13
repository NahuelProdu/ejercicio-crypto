const cryptoSchema = require("../schemas/crypto.schema");
const config = require("../../config/environment");
const mongoose = require("mongoose");

const findData = (cripto, page, limit = 5) => {
    mongoose.connect(config.mongo.uri, config.mongo.options);
    if (page <= 0) page = 1;
    if (!cripto) {
        return cryptoSchema.find()
    }
    let coinUpper = cripto.toUpperCase();
    return cryptoSchema.find({ acronym: coinUpper })
        .limit(limit)
        .skip((page - 1) * limit)
        .exec();
    // TODO: En que momento cierro la conexion?
}

module.exports = findData