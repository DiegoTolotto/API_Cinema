const mongoose = require('mongoose');
const { Schema } = mongoose;

const bilheteShcema = new Schema({

})

const Bilhete = mongoose.model('bilhete', bilheteShcema)

module.exports = Bilhete;