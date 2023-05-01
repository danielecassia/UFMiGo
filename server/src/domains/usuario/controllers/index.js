// Configuração das rotas que pertencem à entidade Usuario.
const express = require('express');
const router = express.Router();
const usuario = require('../services/UsuarioService');

router.get('/', (req, res) => {
    res.send("Página principal do painel usuario")
});

// Rota que retorna lista com TODAS as turmas do USUARIO
router.get('/turmas', (req, res) => {
    usuario.getTurmas().then(turmas => {
        res.send(turmas);
    }).catch((err) => {
        res.send(err)
    });
});

// Rota que retorna todos os dados de uma turma dado um id
router.get('/dadosTurma', (req, res) => {
    const id = "644f1aa56fe10ba707065344" //req.body.id ?

    usuario.getDadosTurma(id).then(turmas => {
        res.send(turmas);
    }).catch((err) => {
        res.send(err)
    });
});

// Rota para tela de cadastro de turmas
router.get('/turmas/cadastrar', (req, res) => {
    res.send("Página de cadastro de turmas");
});

// Rota para criação de novas turmas
router.post('/turmas/nova', (req, res) => {
    var id = "645006044f63ca527c1829c9" //req.body.id ?

    let faltas 
    try {
        faltas = 3 //req.body.faltas ?
    } catch {
        faltas = 0
    }

    usuario.addTurma(id, faltas).then(() => {
        console.log("Turma cadastrada com sucesso!")
    }).catch((err) => {
        console.log("Erro ao cadastrar turma. "+err)
    });
});

// Rota para deletar turmas de usuario
router.delete('/turmas/delete', (req, res) => {
    const id = "644f1aa56fe10ba707065344" // req.body.id ?
    usuario.deleteTurma(id).then(() => {
        console.log("Turma deleteda com sucesso!")
    }).catch((err) => {
        console.log(err)
    });
});

module.exports = router;