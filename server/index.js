const express = require('express')
const app = express();

// Configurações


// Rotas
    app.get('/', function (req, res) {
        res.send('Página principal')
    });


// Outros
    const PORT = 3000;
    app.listen(PORT, console.log("Server is running on port 3000"));