// Configuração das rotas que pertencem à entidade Turma.
const express = require('express');
const router = express.Router();
const turma = require('../services/TurmaService');

router.get('/', (req, res) => {
    res.send("Página principal do painel turmas")
});

// Rota que retorna uma lista contendo o ID, NOME e TURMA de todas as materias do DCC
router.get('/materias', (req, res) => {
    turma.getMaterias().then(turmas => {
        res.send(turmas);
    }).catch((err) => {
        res.send(err)
    });
});

module.exports = router;