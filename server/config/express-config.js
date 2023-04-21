const express = require('express');
const app = express();

const userRouter = require('./usuario');
const classRouter = require('./turma');

app.use('/usuario', userRouter);
app.use('/turma', classRouter);

const PORT = 3000;
app.listen(PORT, console.log("Server is running on port 3000"));