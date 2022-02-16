const express = require('express');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3030;

// fonction pour raccourcir le dernier mot d'une cellule afin d'éviter 
// qu'elle se colle au tableau (padding/margin droit non possible)
// TODO: amélio, splice/slice tous les mots, verif perfs
handlebars.registerHelper("maxCellChar", function (string) {
  let liste = string.split(' ');
  let lastIndex = liste.length - 1;

  if (liste[lastIndex].length > 18)
    liste.splice(lastIndex, 1, liste[lastIndex].slice(0, 18).concat("..."));

  return liste.join(" ");
});

const source = fs.readFileSync(path.resolve(__dirname, 'index.hbs')).toString();
const template = handlebars.compile(source);
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'lists.json')));
const result = template(data);

app.get('/', (req, res) => {
  res.send(result);
});

app.listen(port, () => {
  console.log(`Listening address on : http://localhost:${port}/`);
});