// Configuração das rotas que pertencem à entidade Usuario.
const express = require('express');
const router = express.Router();
const usuario = require('../services/UsuarioService');

router.get('/', (req, res) => {
    res.send("Página principal do painel usuario")
});

// Rota para tela que listará todas as turmas do usuário
router.get('/turmas', (req, res) => {
    usuario.getTurmas().then(turmas => {
        res.send("Lista de turmas do usuario: <br>"+turmas);
    }).catch((err) => {
        res.send(err)
    });
});

// Rota para tela de cadastro de turmas
router.get('/turmas/cadastrar', (req, res) => {
    res.send("Página de cadastro de turmas")
});

// Rota para criação de novas turmas
router.post('/turmas/nova', (req, res) => {
    var novaTurma = {
        codigo: "DCC603".toUpperCase(), //req.body.codigo.toUpperCase()
        turma: "TN".toUpperCase() //req.body.turma.toUpperCase()
    };

    usuario.addTurma(novaTurma).then(() => {
        console.log("Turma cadastrada com sucesso!")
    }).catch((err) => {
        console.log("Erro ao cadastrar turma"+err)
    });
})

module.exports = router;