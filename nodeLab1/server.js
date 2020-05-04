"use strict";


const http = require("http", );
const someoneSaid = require('./quotes.js');
http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-type": "text/plain"
    });
    const count = Math.floor(Math.random() * Math.floor(randomQuotes.length));
    res.write(`${someoneSaid.randomQuotes[count]}`)
    res.end();
}).listen(5600)