// Configurações para o acesso ao nosso Banco de Dados

const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.DB_URI;

mongoose.Promise = global.Promisse;
mongoose.connect(uri, 
{ useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Conectado ao mongo")
}).catch((err) => {
    console.log("Erro ao se conectar: "+err)
});

