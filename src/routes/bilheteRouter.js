const router = require('express').Router();
const Bilhete = require('../models/Bilhete')


router.post('/', async (req, res) => {

    const { assentos } = req.body

    const salas = {
        assentos
    }

    try {
        
        await Bilhete.create(salas)

        res.status(200).json({ message: "Bilhete criado com sucesso"})

    } catch (error) {
        res.status(500).json({ error: error})
    }
});


router.get('/', async (req, res) => {

});

router.get('/:id', async (req, res) => {

})


router.patch('/:id', async (req, res) => {

})


router.delete('/:id', async (req, res) => {

})

module.exports = router