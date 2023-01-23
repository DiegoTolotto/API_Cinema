const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente', {
    nome: String, 
    idade: Number,
    maiorDeIdade: Boolean,
    estudante: Boolean
})

module.exports = Cliente;