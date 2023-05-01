// Configuração de todos os metodos que a entidade Turma precisa no sistema.
const Turma = require('../models/Turma').Turma;
const Usuario = require('../../usuario/models/Usuario').Usuario;

async function getMaterias() {
    var turmas = Turma.find({}, { _id:1, nome:1, turma:1 });
    console.log(turmas[0])
    return turmas;
}

module.exports.getMaterias = getMaterias;