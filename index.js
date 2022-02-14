const express = require('express');
const handlebars = require('handlebars');
const fs = require('fs');
const res = require('express/lib/response');
const { Script } = require('vm');
const app = express();
const port = 3030;

const source = fs.readFileSync('./index.hbs').toString();
console.log(source);
const template = handlebars.compile(source);
const data = { word1: "Hello", word2: "world" };
const result = template(data);

app.get('/', (req, res) => {
    res.send(result);
});

app.listen(port, () => {
    console.log(`Listening address on : http://localhost:${port}/`);
});

<Script> let timestamp = Math.round(new Date().getTime() / 1000); </Script>