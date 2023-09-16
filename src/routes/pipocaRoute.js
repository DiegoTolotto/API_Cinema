const router = require('express').Router();
const Pipoca = require('../models/Pipoca.model')


router.post('/', async (req, res) => {

    const { produto, price } = req.body

    const pipoca = {
        produto, 
        price
    }

    try {
        
        await Pipoca.create(pipoca)

        res.status(200).json({ message: "Pipoca criado com sucesso"})

    } catch (error) {
        res.status(500).json({ error: error})
    }

});


router.get('/', async (req, res) => {
    try {

        const pipocas =  await Pipoca.find()
        
        res.status(200).json(pipocas)

    } catch (error) {
        res.status(500).json({ error: error})
    }


});

router.get('/:id', async (req, res) => {


    const id = req.params.id

    try {
        
        const pipoca = await Pipoca.findOne({ _id: id})


        if (!pipoca) {
            res.status(422).json({ message: 'Pipoca não encontrada!' })
            return
        }


        res.status(200).json(pipoca)

    } catch (error) {
        res.status(500).json({ error: error})
    }

})


router.patch('/:id', async (req, res) => {


    const id = req.params.id

    const { produto, price } = req.body

    const pipocas = {
        produto, 
        price
    }

    try {
        const updatedPipoca = await Pipoca.updateOne({ _id: id }, pipocas)

        if ( updatedPipoca.matchedCount === 0) {
            res.status(422).json({ message: 'Pipoca não encontrada' })
        }


        res.status(200).json(pipocas)
        
    } catch (error) {
        res.status(500).json({ error: error})
    }

})


router.delete('/:id', async (req, res) => {

    const id = req.params.id


    const pipoca = await Pipoca.findOne({ _id: id }) 
    
    if (!pipoca) {
        res.status(422).json({ message: 'Pipoca não encontrada!' })
        return
    }
    
    try {
        
         await Pipoca.deleteOne({ _id: id })

        res.status(200).json({ message: 'Pipoca deletada com sucesso'})

    } catch (error) {
        res.status(500).json({ error: error})
    }
})

module.exports = router