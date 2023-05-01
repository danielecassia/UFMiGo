// Configuração dos atributos e relacionamentos da entidade no banco de dados através do Mongoose.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const turmaSchema = new Schema({
    nome: {
        type: String, 
        require: true
    },
    codigo: {
        type: String, 
        require: true
    },
    turma: {
        type: [String], 
        require: true
    },
    horaInicial: {
        type: String, 
        require: true
    },
    horaFinal: {
        type: String, 
        require: true
    },
    diaSemana: {
        type: String, 
        require: true
    },
    sala: {
        type: String, 
        require: true
    },
    faltas: {
        type: Number, 
        require: false
    }
});

const Turma = mongoose.model("turmas", turmaSchema);

module.exports.Turma = Turma;