const cryptoSchema = require("../schemas/crypto.schema");
const moment = require('moment');
const Promise = require('bluebird');
const _ = require('lodash');

class CoinHome {
    findDataPagination = (cripto, page = 0, limit = 5) => {
        if (page <= 0) page = 1;
        let query = {};

        if (cripto) {
            query = { acronym: cripto.toUpperCase() }
        }

        return cryptoSchema.find(query)
            .limit(limit)
            .skip((page - 1) * limit)
            .exec();
    }

    findDataDates = (initDate, finalDate) => {
        return Promise.resolve(
            cryptoSchema.aggregate([
            {
                $match: { date: { $gte: moment(initDate).format(), $lt: moment(finalDate).format() } }
            },
            {
                $group: { _id: "$acronym", average: { $avg: "$rateValue"} }
            }
        ])).map( ({_id, average}) => ({ acronym: _id, average }))
        // Este map salio de bluebird
    }

    findDataAndDelete = (cripto) => {
        let coinUpper = cripto.toUpperCase();
        return cryptoSchema.deleteMany({ acronym: coinUpper })
    }
}

module.exports = CoinHome