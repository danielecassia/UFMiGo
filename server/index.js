const express = require('express')
const app = express();
const turmas = require("./src/domains/turma/controllers/index")

// Configurações


// Rotas
    app.get('/', function (req, res) {
        res.send('Página Principal')
    });

    app.use('/turmas', turmas);


// Outros
    const PORT = 3000;
    app.listen(PORT, console.log("Server is running on port 3000"));