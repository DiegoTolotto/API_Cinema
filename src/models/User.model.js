const mongoose = require("mongoose");

const User = mongoose.model( 
    "User", 
    new mongoose.Schema({
        username: String,
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
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
            }
        ]
   
}))


module.exports = User;