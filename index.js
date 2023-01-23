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
    const { nome, idade, maiorDeIdade, estudante } = req.body

    const cliente = {
        nome, 
        idade,
        maiorDeIdade,
        estudante
    }

    try {
        
        

    } catch (error) {
        res.status(500).json({error: error})
    }
})

// rotaincial / endpoint

// entragar porta