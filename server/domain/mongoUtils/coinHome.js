const cryptoSchema = require("../schemas/crypto.schema");
const moment = require('moment');
const _ = require('lodash');

class CoinHome {
    findDataPagination = (cripto, page = 0, limit = 5) => {
        if (page <= 0) page = 1;
        let struct;

        if(cripto) {
            struct = { acronym: cripto.toUpperCase() }
        }
        
        return cryptoSchema.find(struct)
            .limit(limit)
            .skip((page - 1) * limit)
            .exec();
    }

    findDataDates = (initDate, finalDate) => {
        return cryptoSchema.aggregate([
            {
                $match: {
                    date: {
                        $gte: moment(initDate).format(),
                        $lt: moment(finalDate).format()
                    }
                }
              },
              {
                $group: {
                  _id: "$acronym",
                  average: {
                    $avg: "$rateValue"
                  }
                }
              }
        ])
    }

    findDataAndDelete = (cripto) => {
        let coinUpper = cripto.toUpperCase();
        return cryptoSchema.deleteMany({ acronym: coinUpper })
    }
}

module.exports = CoinHome