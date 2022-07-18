const express = require('express');
const router = express.Router();
FoodSchema = require('../models/food');

function HandleError(response, reason, message, code){
    console.log('ERROR: ', reason);
    response.status(code || 500).json({"error": message});
}

router.get('/', (request, response) => {
    console.log('GET Received');
    response.send('GET Received Success');
})

router.post('/', (request, response) => {
    console.log('POST Received');
    response.send('POST Received Success');
})