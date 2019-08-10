const express = require('express'); // Importa o Express para o projeto
const routes = require('./routes')

const server = express(); // O Express é uma função que quando chamada inicia um novo servidor que pode receber requisições e retornar respostas

server.use(routes)

server.listen(3333); // Escolhe a porta que o servidor Express vai usar
