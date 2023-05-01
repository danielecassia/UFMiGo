const express = require('express');
const app = express();

const turmaRouter = require('../src/domains/turma/controllers/index');
const userRouter = require('../src/domains/usuario/controllers/index');

app.use('/', userRouter);
app.use('/turmas', userRouter);
app.use('/turmas/cadastrar', userRouter);
app.use('/turmas/nova', userRouter);
app.use('dadosTurma', userRouter);
app.use('/turmas/delete', userRouter);
app.use('/turmas/adicionarFaltas', userRouter);
app.use('/turmas/deletarFaltas', userRouter);


app.use('/', turmaRouter);
app.use('/materias', turmaRouter);

const PORT = 3000;
app.listen(PORT, console.log("Server is running on port 3000"));
