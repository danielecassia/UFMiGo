// Configuração de todos os metodos que a entidade Usuario precisa no sistema.
const Turma = require('../../turma/models/Turma').Turma;
const Usuario = require('../models/Usuario').Usuario;

// Função que adiciona uma turma à lista de turmas do Usuario
async function addTurma(id, faltas) {
    // Verifica se turma existe na coleção de Turmas
    var novaTurma = await Turma.findOne({ _id: id }).exec();
    
    if (novaTurma == null) {
        throw new Error('Turma informada não existe!');
    };
    
    // Verifica se esta turma já foi cadastrada para este usuário
    const turmaUser = await Usuario.findOne({
        nome: "Usuário Padrão",
        "turmas._id": id,
    }).exec();
    
    if (turmaUser != null) {
        throw new Error('Turma já cadastrada pelo usuário!');
    };
    
    // Adiciona a turma à lista de turmas do usuário
    novaTurma.set({ "faltas": faltas });

    await Usuario.updateOne(
        { nome: "Usuário Padrão" },
        { $push: { turmas: novaTurma } }, 
    ).then(() => {
        console.log("Turma cadastrada com sucesso!")
    }).catch((err) => {
        console.log("Erro ao cadastrar turma"+err)
    });
};

// Função que retorma uma Lista de turmas cadastradas pelo usuário
async function getTurmas() {
    const usuario = await Usuario.findOne({ nome: "Usuário Padrão" }).exec();

    if (usuario == null) {
        throw new Error('Usuário não encontrado.');
    }

    var turmas = usuario.turmas;
    return turmas;
};

async function getDadosTurma(id) {
    const turmas = await getTurmas();
    
    for (i = 0; i < turmas.length; i++) {
        if (turmas[i]._id == id) {
            return turmas[i]
        }
    };
};

// Função que deleta uma turma do usuário dado um id
async function deleteTurma(id) {
    await Usuario.updateOne({ 
        nome: "Usuário Padrão"},
        { $pull: { turmas: {_id: id}  } }, 
    ).then(() => {
        console.log("Turma deletada com sucesso!")
    }).catch((err) => {
        console.log("Erro ao deletar turma: "+err)
    });
};

module.exports.addTurma = addTurma;
module.exports.getTurmas = getTurmas;
module.exports.deleteTurma = deleteTurma;
module.exports.getDadosTurma = getDadosTurma;