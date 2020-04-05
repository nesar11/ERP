var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Coin = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    }
}, {timestamps: true});

module.exports = mongoose.model('Coin', Coin);