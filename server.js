//config incial
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const cookieSession = require("cookie-session")
const app = express()


//Cors config
const corsOpitions = {
    origin: "http://localhost:3002"
}

app.use(cors(corsOpitions))


// Middleware config
app.use(
    express.urlencoded({
        extended: true,
    })
)

// Cookie Config
app.use(
    cookieSession({
        name: "cinemax-session",
        keys: ["cinemax"], // deve usar como variável de ambiente secreta
        httpOnly: true
    })
)
// Analisar solicitações do tipo de conteúdo - aplicativo/json
app.use(express.json())

// Analisar solicitações do tipo de conteúdo - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// rotas da API
const userRoute = require('./src/routes/userRoute')
const filmeRoute = require('./src/routes/filmeRoute')
const salaRoute = require('./src/routes/salaRoute')
const bilheteRoute = require('./src/routes/bilheteRoute')
const pipocaRoute = require('./src/routes/pipocaRoute')
const carrinhoRoute = require('./src/routes/carrinhoRoute')

app.use('/user', userRoute)
app.use('/filme', filmeRoute)
app.use('/sala', salaRoute)
app.use('/bilhete', bilheteRoute)
app.use('/pipoca', pipocaRoute)
app.use('/carrinho', carrinhoRoute)

// rotaincial / endpoint
app.get('/', (req, res) => {

    //mostra req
    res.json({ message: 'Oi Express cinema aqui!' })
})


// Definindo porta
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server está ativo na porta ${PORT}.`);
});

// Config
const db  = require('./src/models');
const dbConfig = require('./src/config/db.config');
const Role = db.role;

// Conecção com o mongoDB
db.mongoose.connect(`mongodb+srv://${dbConfig.HOST}:${dbConfig.PORT}${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Conectamos com sucesso')
        initial();

    })
    .catch((err) => {

        console.log("Connection error", err)
        process.exit();
    } 
    )



function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("adicionou 'user' à coleção de funções");
            });

            new Role({
                name: "moderator"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("adicionou 'moderator' à coleção de funções");
            });

            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }

                console.log("adicionou 'admin' à coleção de funções");
            });
        }
    });
}