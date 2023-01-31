const router = require('express').Router();
const Sala = require('../models/Sala')


router.post('/', async (req, res) => {

    const { sala, filme, cliente } = req.body

    const salas = {
        sala,
        filme, 
        cliente
    }

    try {
        
        await Sala.create(salas)

        res.status(200).json({ message: "Sala criada com sucesso"})

    } catch (error) {
        res.status(500).json({ error: error})
    }
});


router.get('/', async (req, res) => {

    try {

        const salas =  await Sala.find()
        
        res.status(200).json(salas)

    } catch (error) {
        res.status(500).json({ error: error})
    }
});

router.get('/:id', async (req, res) => {

    const id = req.params.id

    try {
        
        const procuraSala = await Sala.findOne({ _id: id})

        res.status(200).json(procuraSala)

    } catch (error) {
        res.status(500).json({ error: error})
    }


})


router.patch('/:id', async (req, res) => {

    const id = req.params.id

    const { sala, filme, cliente } = req.body

    const salas = {
        sala,
        filme, 
        cliente
    }

    try {

        const updatedSala = await Sala.updateOne({ _id: id }, salas)

        res.status(200).json(salas)
        
    } catch (error) {
        res.status(500).json({ error: error})
    }
})

module.exports = router