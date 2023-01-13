const findData = require("../../domain/mongoUtils/find");

class CoinController {
    register(req, res) {
        let { coin, page } = req.query;
        return findData(coin, page)
            .then(data => {
                res.send(data);
            })
    }
}

module.exports = new CoinController()