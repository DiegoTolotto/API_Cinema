const router = require('express').Router();

const Filme = require('../models/Filme');

router.post('/', async (req, res) => {


    const { nome, tempoDeDuracao, classificacao, genero, descricao, valor, link } = req.body;

    const filme = {
        nome, 
        tempoDeDuracao, 
        classificacao, 
        genero, 
        descricao, 
        valor,
        link
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

router.get('/:id', async (req, res) => {

    const id = req.params.id

    try {
        
        const filmes = await Filme.findOne({ _id: id})

        if (!filmes) {
            res.status(422).json({ message: 'Filme não encontrado!' })
            return
        }

        res.status(200).json(filmes)

    } catch (error) {
        res.status(500).json({ error: error})
    }
})

router.patch('/:id', async (req, res) => {

    const id = req.params.id


    const { nome, tempoDeDuracao, classificacao, genero, descricao, valor, link } = req.body;

    const filme = {
        nome, 
        tempoDeDuracao, 
        classificacao, 
        genero, 
        descricao, 
        valor,
        link
    }


    try {

        const updatedFilmes = await Filme.updateOne({ _id: id}, filme)

        if (updatedFilmes.matchedCount === 0) {
            res.status(422).json({ message: 'Filme não encontrado'})
        }

        res.status(200).json(filme)
        
    } catch (error) {
        res.status(500).json({ error: error})
    }
})


router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const filmes = await Filme.findOne({ _id: id})

    if (!filmes) {
        res.status(422).json({ message: 'Filme não encontrado!' })
        return
    }

    try {

        await Filme.deleteOne({ _id: id })

        res.status(200).json({ message: 'Filme deletado com sucesso' })
        
    } catch (error) {
        res.status(500).json({ error: error})
    }
})

module.exports = router