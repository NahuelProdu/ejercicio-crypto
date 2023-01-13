const {findDataPagination, findDataDates} = require("../../domain/mongoUtils/find");

class CoinController {
    register(req, res) {
        let { coin, page } = req.query;
        return findDataPagination(coin, page)
            .then(data => {
                res.send(data);
            })
    }

    average(req, res) {
        let { initDate, finalDate } = req.query;
        return findDataDates(initDate, finalDate)
            .then(data => {
                res.send(data);
            })
    }
}

module.exports = new CoinController()