const mongoose = require('mongoose');
const { Schema } = mongoose;

const carrinhoShcema = new Schema({
   bilhete: String,
   pipoca: String
})

const Carrinho = mongoose.model('Carrinho', carrinhoShcema)

module.exports = Carrinho;