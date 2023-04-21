// Configuração dos atributos e relacionamentos da entidade no banco de dados através do Mongoose.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const turmaSchema = new Schema({
    nome: String,
    codigo: String,
    turma: String,
    cargaHoraria: Number,
    horario: {dia: String, hora: String},
    faltas: {
        type: Number, 
        default: 0
    }
});

const Turma = mongoose.model("turmas", turmaSchema);

module.exports.Turma = Turma;