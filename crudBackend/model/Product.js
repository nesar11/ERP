
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Product
var Product = new Schema({
    ProductName: {
        type: String
    },
    ProductDescription: {
        type: String
    },
    ProductPrice: {
        type: Number
    },
    productImage: {
        type: String
    }
}, {timestamps: true});

module.exports = mongoose.model('Product', Product);