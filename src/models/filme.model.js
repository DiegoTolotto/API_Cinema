const mongoose = require('mongoose');
const { Schema } = mongoose;

const filmeShcema = new Schema({
    nome: String,
    classificacao: String,
    genero: String,
    descricao: String,
    trailer: String,
    link: String,
    valor: Number,
    tempoDeDuracao: Number
})

const Filme = mongoose.model('Filme', filmeShcema)

module.exports = Filme;