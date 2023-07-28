const router = require('express').Router();
const Bilhete = require('../models/Bilhete')


router.post('/', async (req, res) => {

    const { assentos } = req.body

    const bilhetes = {
        assentos
    }

    try {
        
        await Bilhete.create(bilhetes)

        res.status(200).json({ message: "Bilhete criado com sucesso"})

    } catch (error) {
        res.status(500).json({ error: error})
    }
});


router.get('/', async (req, res) => {

    try {

        const bilhetes =  await Bilhete.find()
        
        res.status(200).json(bilhetes)

    } catch (error) {
        res.status(500).json({ error: error})
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        
        const bilhete = await Bilhete.findOne({ _id: id})


        if (!bilhete) {
            res.status(422).json({ message: 'Bilhete não encontrada!' })
            return
        }


        res.status(200).json(bilhete)

    } catch (error) {
        res.status(500).json({ error: error})
    }
})


router.patch('/:id', async (req, res) => {

    const id = req.params.id

    const { assentos } = req.body

    const bilhetes = {
        assentos
    }

    try {
        const updatedBilhete = await Bilhete.updateOne({ _id: id }, bilhetes)

        if ( updatedBilhete.matchedCount === 0) {
            res.status(422).json({ message: 'Bilhete não encontrada' })
        }


        res.status(200).json(bilhetes)
        
    } catch (error) {
        res.status(500).json({ error: error})
    }
})


router.delete('/:id', async (req, res) => {

    const id = req.params.id


    const bilhete = await Bilhete.findOne({ _id: id }) 
    
    if (!bilhete) {
        res.status(422).json({ message: 'Bilhete não encontrada!' })
        return
    }
    
    try {
        
         await Bilhete.deleteOne({ _id: id })

        res.status(200).json({ message: 'Bilhete deletada com sucesso'})

    } catch (error) {
        res.status(500).json({ error: error})
    }
})

module.exports = router