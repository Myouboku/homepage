const express = require('express');
const handlebars = require('handlebars');
const fs = require('fs');
const app = express();
const port = 3030;

const source = fs.readFileSync('./index.hbs').toString();
const template = handlebars.compile(source);
const data = JSON.parse(fs.readFileSync('./lists.json'));
const result = template(data);

app.get('/', (req, res) => {
  res.send(result);
});

app.listen(port, () => {
  console.log(`Listening address on : http://localhost:${port}/`);
});
