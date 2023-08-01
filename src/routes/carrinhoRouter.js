const router = require('express').Router();

const Carrinho = require('../models/Carrinho')


 // Create
 router.post('/', async (req, res) => {

    //req.body
    const { bilhete, pipoca, valorTotal } = req.body

    const carrinho = {
        bilhete,
        pipoca, 
        valorTotal
    }

    try {
        
        await Carrinho.create(carrinho)

        res.status(201).json({message: 'Carrinho inserido com sucesso'})

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
            res.status(422).json({ message: 'Carrinho não encontrado!' })
            return
        }

        res.status(200).json(carrinho)

    } catch (error) {
        res.status(500).json({ erro: error })
    }
 })

  //Update
  router.patch('/:id', async (req, res) => {

    const id = req.params.id

    const { bilhete, pipoca, valorTotal } = req.body


    const carrinho = {
        bilhete,
        pipoca, 
        valorTotal
    }

    try {
        
        const updatedCarrinhos = await Carrinho.updateOne({ _id: id }, carrinho)

        if (updatedCarrinhos.matchedCount === 0) {
            res.status(422).json({ message: 'Carrinho não encontrado!'})
        }


        res.status(200).json(carrinho)
       
    } catch (error) {
        res.status(500).json({ erro: error})
    }
 })

 // Delete
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const carrinho = await Carrinho.findOne({ _id: id })

    if (!carrinho) {
        res.status(422).json({ message: 'Carrinho não encontrado!' })
        return
    }


    try {
        
        await Carrinho.deleteOne({ _id: id})

        res.status(200).json({message: 'Carrinho removido com sucesso!'})
    } catch (error) {
        res.status(500).json({ error: error})
    }
})



module.exports = router