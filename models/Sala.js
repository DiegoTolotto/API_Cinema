const mongoose = require('mongoose');

const Sala = mongoose.model('Sala', {
    sala: Number,   
    filme: String,      
    cliente: String
})

module.exports = Sala