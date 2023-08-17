const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Digite um Email!"],
        unique: [true, "Email já registrado!"],
    },
  
    password: {
        type: String,
        required: [true, "Digite uma senha!"],
        unique: false,
    },
  })

  const User = mongoose.model('user', UserSchema)

module.exports = User;