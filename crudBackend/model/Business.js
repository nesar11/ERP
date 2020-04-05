const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Business = new Schema({
    
    person_name:{
        type: String
    },
    business_name: {
        type: String
    },
    business_gst_number: {
        type: Number
    },
    isPrivate: { type: Boolean, default: false }
},{timestamps: true});

module.exports = mongoose.model('Business', Business);