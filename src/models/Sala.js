const mongoose = require('mongoose');
const { Schema } = mongoose;

const salaSchema = new Schema({
    sala: Number,   
    filme: String,      
    totalAssentos: Number
})

const Sala = mongoose.model('sala', salaSchema)

module.exports = Sala;