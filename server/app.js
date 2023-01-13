/**
Main application file
*/

require("./srv-globals");

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const moment = require('moment');
const mongoose = require("mongoose");
const config = require("./config/environment");
const cryptoSchema = require("./domain/schemas/crypto.schema");
const asciichart = require('asciichart');
const express = require("express")

mongoose.Promise = require("bluebird")
mongoose.connect(config.mongo.uri, config.mongo.options);

// mongoose.connection.on('open', _ => {
//     console.log('Se conecto a MongoDB: ', config.mongo.uri)
// })

let cripto = require("./console");

const formatDate = (date) => {
    return moment(date).format("DD/MM/YYYY");
}

return cryptoSchema.find({ acronym: cripto })
    .then(data => {
        let dates = data.map(coin => coin.date)
        let minDate = dates.reduce(function (date1, date2) {
            return date1 < date2 ? date1 : date2;
        });
        let maxDate = dates.reduce(function (date1, date2) {
            return date1 > date2 ? date1 : date2;
        });
        let graficValues = data.map(coin => coin.rateValue)
        console.log('\nEl siguiente grafico muestra el valor a lo largo del tiempo de la criptomoneda elegida');
        console.log(`\nFecha Inicio: ${formatDate(minDate)} - Fecha Fin: ${formatDate(maxDate)}\n`)
        console.log(asciichart.plot(graficValues))
    })
    .then(_ => {
        console.log("\nGracias vuelvas prontos")
        return mongoose.disconnect()
    })

    
// var app = express();

// var server = require("http").createServer(app);

// require("./config/express")(app);

// require("./routes")(app);

// require("./errorHandler")(app);


// server.listen(config.port, config.ip, () => {
//     console.log("Express server listening on %d, in %s mode", config.port, app.get("env"))
// });








