const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const db = require('./database');

const foodsRouter = require('./routes/foods');

app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/foods', foodsRouter);

app.listen(8001, () => {
    console.log('Listening on 8001')
})