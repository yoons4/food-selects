const mongoose = require('mongoose');
const url = 'mongodb://foods-users:complex@node10659-foodget.us.reclaim.cloud/foods';

mongoose.connect(url, {useUnifiedTopology: true, useNewUrlParser: true});
const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to Database');
});

db.on('error', (error) => {
    console.error('Connection error: ', error);
});

module.exports = db;
