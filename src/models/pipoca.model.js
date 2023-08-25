const mongoose = require('mongoose');
const { Schema } = mongoose;

const pipocaShcema = new Schema({
   produto: String,
   price: Number
})

const Pipoca = mongoose.model('pipoca', pipocaShcema)

module.exports = Pipoca;