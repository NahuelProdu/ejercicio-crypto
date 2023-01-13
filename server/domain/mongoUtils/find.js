const cryptoSchema = require("../schemas/crypto.schema");
const config = require("../../config/environment");
const mongoose = require("mongoose");
const moment = require('moment');
const _ = require('lodash');

const findDataDates = (initDate, finalDate) => {
    mongoose.connect(config.mongo.uri, config.mongo.options);
    return cryptoSchema.find({
        date: {
            $gte: moment(initDate).format(),
            $lt: moment(finalDate).format()
        }
    })
        .then(data => {
            let coins = data.map(elem => elem.acronym);
            let setCoins = new Set(coins);
            setCoins = [...setCoins];
            let averages = []
            while (setCoins.length > 0) {
                let coin = setCoins.shift();
                let values = data.filter(elem => elem.acronym == coin);
                let average = _.sumBy(values, value => value.rateValue) / values.length;
                averages.push(
                    {
                        acronym: coin,
                        average: average
                    }
                )
            }

            return averages;
        })
}

const findDataPagination = (cripto, page, limit = 5) => {
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

module.exports = { findDataPagination, findDataDates }