const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FoodSchema = new Schema({
    name:String,
    color:String,
    calories: Number
});

module.exports = mongoose.model('Food', FoodSchema);