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

        const bilhetes =  await Sala.find()
        
        res.status(200).json(bilhetes)

    } catch (error) {
        res.status(500).json({ error: error})
    }
});

router.get('/:id', async (req, res) => {

})


router.patch('/:id', async (req, res) => {

})


router.delete('/:id', async (req, res) => {

})

module.exports = router