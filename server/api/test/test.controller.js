const { findDataPagination, findDataDates, findDataAndDelete } = require("../../domain/mongoUtils/find");

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

    delete(req, res) {
        let { coin } = req.query;
        return findDataAndDelete(coin)
            .then(data => {
                res.send(data);
            })
    }
}

module.exports = new CoinController()