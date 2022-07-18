const express = require('express');
const router = express.Router();
FoodSchema = require('../models/food');

function HandleError(response, reason, message, code){
    console.log('ERROR: ', reason);
    response.status(code || 500).json({"error": message});
}

router.get('/', (request, response) => {
    /*
    console.log('GET received');
    response.send('GET received successful');
    */
    FoodSchema.find().exec((error, food) => {
        if (error) {
            HandleError(response, "error retrieving data", "get failed", 500);
        } else {
            response.send(food);
        }
    });
});

router.post('/', (request, response) => {
    /*
    console.log('POST received');
    response.send('POST received successful');
    */
    
    const foodJSON = request.body;
    if (!foodJSON.name || !foodJSON.color || !foodJSON.calories){
        HandleError(response, "missing information", "post data missing", 500);
    } else {
        food = new FoodSchema({
            name: foodJSON.name,
            color: foodJSON.color,
            calories: foodJSON.calories || 0
        });
        food.save((error) => {
            if (error){
                response.send({"error": error});
            } else {
                response.send({"id": food.id});
            }
    });
}
});

module.exports = router;
