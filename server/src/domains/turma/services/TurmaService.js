// Configuração de todos os metodos que a entidade Turma precisa no sistema.
const Turma = require('../models/Turma').Turma;
const Usuario = require('../../usuario/models/Usuario').Usuario;


async function addTurma( novaTurma ) {
    // Verifica se turma existe
    console.log("Buscando turmas...")
    var turma = await Turma.findOne({ 
        codigo: novaTurma.codigo,
        turma: novaTurma.turma
    }).exec();
    
    if (turma == null) {
        console.log("Turma não existe!");
        throw new Error('Turma informada não existe!');
    } 
    
    // Verifica se turma já foi cadastrada para este usuário
    var turmaUser = await Usuario.find({
        nome: "Usuário Padrão",
        "turmas.codigo": novaTurma.codigo,
        "turmas.turma": novaTurma.turma
    }).exec();
    
    if (turmaUser.length > 0) {
        console.log("Turma já cadastrada");
        throw new Error('Turma já cadastrada pelo usuário!');
    }

    // Cadastra turma
    try {
        turma.set({ faltas: novaTurma.faltas });
    } catch {
        turma.set({ faltas: 0 });
    }

    turma.turma = novaTurma.turma;

    await Usuario.updateOne(
        { nome: "Usuário Padrão" },
        { $push: { turmas: turma } },
    ).then(() => {
        console.log("Turma cadastrada com sucesso!")
    });
    
};

async function getListaTurmas() {
    try {
        const usuario = await Usuario.findOne({ nome: "Usuário Padrão" }).exec();

        if (usuario == null) {
            throw new Error('Não foi possível encontrar o usuário!');
        }

        const turmas = usuario.turmas;
        return turmas;

    } catch (err) {
        console.log(err);
    }
};

module.exports.addTurma = addTurma;
module.exports.getListaTurmas = getListaTurmas;