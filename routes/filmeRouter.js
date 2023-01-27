const router = require('express').Router();

const Filme = require('../models/Filme');

router.post('/', async (req, res) => {


    const { nome, tempoDeDuracao, classificacao, genero, descricao, valor } = req.body;

    const filme = {
        nome, 
        tempoDeDuracao, 
        classificacao, 
        genero, 
        descricao, 
        valor
    }

    try {
        await Filme.create(filme)

        res.status(200).json({ message: 'Filme inserido com sucesso'})


    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/', async (req, res) => {

    try {
        
        const filmes = await Filme.find() 

        res.status(200).json(filmes)

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

module.exports = router