const findData = require("../../domain/mongoUtils/find");

class CoinController {
    register(req, res) {
        let coin = req.query.coin;
        return findData(coin)
            .then(data => {
                res.send(data);
            })
    }
}

module.exports = new CoinController()