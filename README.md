# ejercicio-crypto

Utilizando bluebird, request-promise, mongoose, lodash y asciichart realizar los siguientes puntos:

1) Crear un job que obtenga y guarde en una coleccion de mongo las cotazaciones de las siguientes monedas (en USD): Bitcoin, Etherum, Dogecoin y Solana a traves de CoinAPI. Se planea que el job corra cada una hora y la lista de monedas podria variar en un futuro cercano.
2) Permitir que el usuario pueda ingresar por consola alguna de las monedas anteriores y ver su grafico de cotizacion durante el ultimo dia, indicando la hora inicial y final que se esta graficando.

Aunque en principio no parece haber mucha logica, siempre tener en cuenta la division de responsabilidades en el mundo de objetos.

Node 16.3

3)

Hacer un endpoint que devuelva todos los registros de la base de datos de forma paginada, permitiendo filtrar por moneda
Hacer un endpoint que devuelva el precio promedio de todas las monedas de la base de datos en un cierto periodo de tiempo
Hacer un endpoint que permita eliminar todos los registros de cierta moneda

https://mongoosejs.com/docs/models.html
https://expressjs.com/en/guide/using-middleware.html