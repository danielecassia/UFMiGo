// Configuração das rotas que pertencem à entidade Turma.
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Página principal do painel turmas")
});

router.get('/cadastrar', (req, res) => {
    res.send("Página de cadastro de turmas")
});

module.exports = router;