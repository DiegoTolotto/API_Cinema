//config incial
const express = require('express')
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
const clienteRouters = require('./src/routes/clienteRoutes')
const filmeRoutes = require('./src/routes/filmeRouter')
const salaRouter = require('./src/routes/salaRouter')

app.use('/cliente', clienteRouters)
app.use('/filme', filmeRoutes)
app.use ('/sala', salaRouter)

// rotaincial / endpoint
app.get('/', (req, res) => {

    //mostra req

    res.json({ message: 'Oi Express cinema aqui!' })
})


// porta
const DB_USER = require('./DB_Access/DB_User');
const DB_PASSWORD = require('./DB_Access/DB_Passaword')

    // Por segurança naõ vou subir ao Github o meu User e nem minha senha 


mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.kz5bzvm.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Conectamos com sucesso')
        app.listen(3001)
    })
    .catch((err) => console.log(err))