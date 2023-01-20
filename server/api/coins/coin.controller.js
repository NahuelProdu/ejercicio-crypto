const CoinHome = require("../../domain/mongoUtils/coinHome");

let coinHome = new CoinHome();

class CoinController {
    data(req, res) {
        let { acronym, page } = req.query;
        return coinHome.findDataPagination(acronym, page)
            .then(data => {
                res.send(data);
            })
    }

    average(req, res) {
        let { initDate, finalDate } = req.query;
        return coinHome.findDataDates(initDate, finalDate)
            .then(data => {
                res.send(data);
            })
    }

    delete(req, res) {
        let { acronym } = req.params;
        return coinHome.findDataAndDelete(acronym)
            .then(data => {
                res.send(data);
            })
    }
}

module.exports = new CoinController()