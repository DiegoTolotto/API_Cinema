//config incial
const express = require('express');
const mongoose = require('mongoose');
const app = express()



//forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    })
)

// rotas da API
app.post('/', async (req, res) => {

    //req.body
    const { name, salary, approved } = req.body

    const person = {
        name, 
        salary, 
        approved
    }

    
})

// rotaincial / endpoint

// entragar porta