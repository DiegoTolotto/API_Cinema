const router = require('express').Router();

const Cliente = require('../models/User.model')


 // Create
 router.post('/', async (req, res) => {

    //req.body
    const { maiorDeIdade, estudante } = req.body

    const cliente = {
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
 router.get('/', async (req, res) => {
    try {
        
        const clientes = await Cliente.find()

        res.status(200).json(clientes)

    } catch (error) {
        res.status(500).json({ error: error})
    }
 })

 router.get('/:id', async (req, res) => {

    const id = req.params.id


    try {
    
        const cliente = await Cliente.findOne({ _id: id })

        if (!cliente) {
            res.status(422).json({ message: 'Usúario não encontrado!' })
            return
        }

        res.status(200).json(cliente)

    } catch (error) {
        res.status(500).json({ erro: error })
    }
 })

 //Update
 router.patch('/:id', async (req, res) => {

    const id = req.params.id

    const { maiorDeIdade, estudante } = req.body


    const cliente = {
        maiorDeIdade,
        estudante
    }

    try {
        
        const updatedClientes = await Cliente.updateOne({ _id: id }, cliente)

        if (updatedClientes.matchedCount === 0) {
            res.status(422).json({ message: 'Usúario não encontrado!'})
        }


        res.status(200).json(cliente)
       
    } catch (error) {
        res.status(500).json({ erro: error})
    }
 })

 // Delete
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const cliente = await Cliente.findOne({ _id: id })

    if (!cliente) {
        res.status(422).json({ message: 'Usúario não encontrado!' })
        return
    }


    try {
        
        await Cliente.deleteOne({ _id: id})

        res.status(200).json({message: 'Usúario removido com sucesso!'})
    } catch (error) {
        res.status(500).json({ error: error})
    }
})


module.exports = router