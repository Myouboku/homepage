const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 3030;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Example app listening port ${port}`);
})