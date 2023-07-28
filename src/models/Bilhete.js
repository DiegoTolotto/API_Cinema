const mongoose = require('mongoose');
const { Schema } = mongoose;

const bilheteShcema = new Schema({
    assentos: Number
})

const Bilhete = mongoose.model('bilhete', bilheteShcema)

module.exports = Bilhete;