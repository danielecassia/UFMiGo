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
router.get('/dadosTurma/:id', (req, res) => {
    const id = req.params.id //req.body.id ?

    usuario.getDadosTurma(req.params.id).then(turmas => {
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
    usuario.addTurma(req.body.id, req.body.faltas).then(() => {
        console.log("Turma cadastrada com sucesso!")
    }).catch((err) => {
        console.log("Erro ao cadastrar turma. " + err)
    });
});

// Rota para deletar turmas de usuario
router.delete('/turmas/delete/:id', (req, res) => {
    const id = req.params.id // req.body.id ?
    usuario.deleteTurma(id).then(() => {
        console.log("Turma deleteda com sucesso!")
    }).catch((err) => {
        console.log(err)
    });
});


// Rota para adicionar faltas
router.post('/turmas/adicionarFaltas', (req, res) => {
    var id = req.params.id
    const numFaltas = req.params.falta

    usuario.addFaltas(id, numFaltas).then(() => {
        console.log("Falta cadastrada com sucesso!")
    }).catch((err) => {
        console.log("Erro ao atualizar o número de faltas: "+err)
    });
});

// Rota para deletar faltas
router.delete('/turmas/deletarFaltas', (req, res) => {
    const id = req.params.id
    const numFaltas = req.params.falta

    usuario.deleteFaltas(id, numFaltas).then(() => {
        console.log("Falta retirada com sucesso!")
    }).catch((err) => {
        console.log("Erro ao atualizar o número de faltas: "+err)
    });
});

module.exports = router;
