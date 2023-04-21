// Configuração dos atributos e relacionamentos da entidade no banco de dados através do Mongoose.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//import { Schema, model } from 'mongoose';

const Turma = new Schema({
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

mongoose.model("turmas", Turma);