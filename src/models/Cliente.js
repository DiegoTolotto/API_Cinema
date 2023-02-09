const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente', {
    maiorDeIdade: Boolean,
    estudante: Boolean
})

module.exports = Cliente;