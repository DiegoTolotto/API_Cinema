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

// Read
router.get('/', async (req, res) => {
    try {
        
        const carrinhos = await Carrinho.find()

        res.status(200).json(carrinhos)

    } catch (error) {
        res.status(500).json({ error: error})
    }
 })

 router.get('/:id', async (req, res) => {

    const id = req.params.id


    try {
    
        const carrinho = await Carrinho.findOne({ _id: id })

        if (!carrinho) {
            res.status(422).json({ message: 'Usúario não encontrado!' })
            return
        }

        res.status(200).json(carrinho)

    } catch (error) {
        res.status(500).json({ erro: error })
    }
 })



module.exports = router