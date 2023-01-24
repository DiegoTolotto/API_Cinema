//config incial
const express = require('express');
const mongoose = require('mongoose');
const app = express()



//forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

// rotas da API
const clienteRouters = require('./routes/clienteRoutes')

app.use('/cliente', clienteRouters)


// rotaincial / endpoint
app.get('/', (req, res) => {

    //mostra req

    res.json({ message: 'Oi Express cinema aqui!' })
})


// entregar porta
const DB_USER = ''
const DB_PASSWORD = encodeURIComponent('')

    // Por segurança naõ vou subir ao Github o meu User e nem minha senha 


mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.kz5bzvm.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Conectamos com sucesso')
        app.listen(3000)
    })
    .catch((err) => console.log(err))