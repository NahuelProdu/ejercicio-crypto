const config = require("../../server/config/environment");
const structCrypto = require("../../server/domain/mongoUtils/struct.crypto");
const mongoose = require("mongoose")
const Promise = require('bluebird');
const ApiCoin = require("../../server/domain/apiCoin");

const coins = config.api.coins

mongoose.connect(config.mongo.uri, config.mongo.options);

let arrayCoins = coins.split(',');
let api = new ApiCoin();

Promise.map(arrayCoins, (coin) => {
    return api.getQuote(coin)
        .then(res => {
            return structCrypto(res).save()
        })
}).then(_ => { 
    console.log("Ya guarde todo")
    return mongoose.disconnect()
})
