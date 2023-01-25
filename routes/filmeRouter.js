const router = require('express').Router();

const Filme = require('./clienteRoutes');

router.post('/', async (req, res) => {
    const { nome, tempoDeDuracao, classificacao, genero, descricao, valor} = req.body;

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

        res.status(201).json({ message: 'Filme incerido com sucesso'})


    } catch (error) {
        res.status(500).json({error: error})
    }
})

