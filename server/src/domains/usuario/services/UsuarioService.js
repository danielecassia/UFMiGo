// Configuração de todos os metodos que a entidade Usuario precisa no sistema.
const Turma = require('../../turma/models/Turma').Turma;
const Usuario = require('../models/Usuario').Usuario;


async function addTurma( turmaDados ) {
    // Verifica se turma existe
    var novaTurma = await Turma.findOne({ 
        codigo: turmaDados.codigo,
        turma: turmaDados.turma
    }).exec();
    
    if (novaTurma == null) {
        throw new Error('Turma informada não existe!');
    } 
    
    // Verifica se turma já foi cadastrada para este usuário
    const turmaUser = await Usuario.find({
        nome: "Usuário Padrão",
        "turmas.codigo": turmaDados.codigo,
        "turmas.turma": turmaDados.turma
    }).exec();
    
    if (turmaUser.length > 0) {
        console.log("Turma já cadastrada");
        throw new Error('Turma já cadastrada pelo usuário!');
    }

    // Cadastra turma
    try {
        novaTurma.set({ faltas: turmaDados.faltas });
    } catch {
        novaTurma.set({ faltas: 0 });
    }

    novaTurma.turma = novaTurma.turma;

    await Usuario.updateOne(
        { nome: "Usuário Padrão" },
        { $push: { turmas: novaTurma } },
    ).then(() => {
        console.log("Turma cadastrada com sucesso!")
    });
};

async function getTurmas() {
    try {
        const usuario = await Usuario.findOne({ nome: "Usuário Padrão" }).exec();

        if (usuario == null) {
            throw new Error('Usuário não encontrado.');
        }

        const turmas = usuario.turmas;
        return turmas;

    } catch (err) {
        console.log(err);
    }
};

module.exports.addTurma = addTurma;
module.exports.getTurmas = getTurmas;