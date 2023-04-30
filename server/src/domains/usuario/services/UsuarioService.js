// Configuração de todos os metodos que a entidade Usuario precisa no sistema.
const Turma = require('../../turma/models/Turma').Turma;
const Usuario = require('../models/Usuario').Usuario;

// Função que adiciona uma turma à lista de turmas do Usuario
async function addTurma( turmaDados ) {
    // Verifica se turma existe na coleção de Turmas
        var novaTurma = await Turma.findOne({ 
            codigo: turmaDados.codigo,
            turma: turmaDados.turma
        }).exec();
        
        if (novaTurma == null) {
            throw new Error('Turma informada não existe!');
        };
    
    // Verifica se esta turma já foi cadastrada para este usuário
        const turmaUser = await Usuario.findOne({
            nome: "Usuário Padrão",
            "turmas.codigo": turmaDados.codigo,
            "turmas.turma": turmaDados.turma
        }).exec();
        
        if (turmaUser != null) {
            throw new Error('Turma já cadastrada pelo usuário!');
        }
    
    // Cadastra turma
        // Adiciona campo com número de faltas 
        try {
            // Numero de faltas foi informado
            novaTurma.set({ "faltas": turmaDados.faltas });
        } catch {
            // Numero de faltas NÃO foi informado
            novaTurma.set({ "faltas": 0 });
        }
        
        // Define turma do usuario
        novaTurma.turma = turmaDados.turma;
        
        // Adiciona a turma à lista de turmas do usuário
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

module.exports.addTurma = addTurma;
module.exports.getTurmas = getTurmas;