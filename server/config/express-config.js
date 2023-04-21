const express = require('express');
const app = express();

const turmaRouter = require('../src/domains/turma/controllers/index.js');

app.use('/', turmaRouter);
app.use('/turmas', turmaRouter);
app.use('/turmas/cadastrar', turmaRouter);
app.use('/turmas/nova', turmaRouter);


const PORT = 3000;
app.listen(PORT, console.log("Server is running on port 3000"));