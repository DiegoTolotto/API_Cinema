const mongoose = require('mongoose');
const { Schema } = mongoose;

const bilheteSchema = new Schema({
    assentos: Number
})

const Bilhete = mongoose.model('bilhete', bilheteSchema)

module.exports = Bilhete;