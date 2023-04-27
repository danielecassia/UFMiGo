// Configuração das rotas que pertencem à entidade Turma.
const express = require('express');
const router = express.Router();
const turma = require('../services/TurmaService');

router.get('/', (req, res) => {
    res.send("Página principal do painel turmas")
});

module.exports = router;