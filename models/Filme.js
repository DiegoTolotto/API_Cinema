const mongoose = require('mongoose');

const Filme = mongoose.model({
    "nome": String,
    "tempoDeDuracao": Number,
    "classificacao": String,
    "genero": String,
    "descricao": Text,
    "valor": Number,
})

module.exports = Filme