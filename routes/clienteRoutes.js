const router = require('express').Router();

const Cliente = require('../models/Cliente')


 // Create
 router.post('/', async (req, res) => {

    //req.body
    const { nome, idade, maiorDeIdade, estudante } = req.body

    const cliente = {
        nome, 
        idade,
        maiorDeIdade,
        estudante
    }

    try {
        
        await Cliente.create(cliente)

        res.status(201).json({message: 'Pessoa inserida com sucesso'})

    } catch (error) {
        res.status(500).json({error: error})
    }
})

 // Read

 //Update

 // Delete

module.exports = router