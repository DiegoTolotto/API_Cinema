const mongoose = require('mongoose');

const Filme = mongoose.model('Filme', {
    nome: String,
    tempoDeDuracao: Number,
    classificacao: String,
    genero: String,
    descricao: String,
    valor: Number
})

module.exports = Filme;