const router = require('express').Router();

const Carrinho = require('../models/Carrinho')


 // Create
 router.post('/', async (req, res) => {

    //req.body
    const { bilhete, pipoca } = req.body

    const carrinho = {
        bilhete,
        pipoca
    }

    try {
        
        await Carrinho.create(carrinho)

        res.status(201).json({message: 'Pessoa inserida com sucesso'})

    } catch (error) {
        res.status(500).json({error: error})
    }
})



module.exports = router