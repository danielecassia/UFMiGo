// Configuração das rotas que pertencem à entidade Usuario.
const express = require('express');
const router = express.Router();
const usuario = require('../services/UsuarioService');

router.get('/', (req, res) => {
    res.send("Página principal do painel usuario")
});

router.get('/turmas', (req, res) => {
    usuario.getTurmas().then(turmas => {
        res.send("Lista de turmas do usuario: <br>"+turmas);
    }).catch((err) => {
        res.send(err)
    });
});

router.get('/turmas/cadastrar', (req, res) => {
    res.send("Página de cadastro de turmas")
});

router.post('/turmas/nova', (req, res) => {
    var novaTurma = {
        codigo: "DCC603", //req.body.codigo?
        turma: "TM" //req.body.turma?
    };

    usuario.addTurma(novaTurma).then(() => {
        console.log("Turma cadastrada com sucesso!!")
    }).catch((err) => {
        console.log(err)
    });
})

module.exports = router;