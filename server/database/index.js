// Configurações para o acesso ao nosso Banco de Dados

const mongoose = require('mongoose');
require('dotenv').config();

main().catch(err => console.log(err));

async function main() {
    const uri = process.env.DB_URI;
    await mongoose.connect(uri, 
    { useNewUrlParser: true, useUnifiedTopology: true });    
    console.log("Connected to mongodb!")
}

module.exports = main;
