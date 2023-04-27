const express = require('express');
const app = express();

const turmaRouter = require('../src/domains/turma/controllers/index');
const userRouter = require('../src/domains/usuario/controllers/index');

app.use('/', userRouter);
app.use('/turmas', userRouter);
app.use('/turmas/cadastrar', userRouter);
app.use('/turmas/nova', userRouter);

const PORT = 3000;
app.listen(PORT, console.log("Server is running on port 3000"));