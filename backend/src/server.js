const express = require('express') // Importa o Express para o projeto
const mongoose = require('mongoose') // Importa o Mongoose (antes das rotas)
const cors = require('cors')
const routes = require('./routes') // Importa as rotas definidas no arquivo routes.js (é necessário usar ./)

const server = express(); // O Express é uma função que quando chamada inicia um novo servidor que pode receber requisições e retornar respostas

mongoose.connect('mongodb+srv://master:Gh2zAX2SD@cluster0-ncd5r.mongodb.net/tindev?retryWrites=true&w=majority', {
    useNewUrlParser: true
}) // Conecta o servidor com o Banco de Dados

server.use(cors())

server.use(express.json()) // Faz com que o Express utilize o JSON para lidar com requisicoes 
server.use(routes)

server.listen(3333); // Escolhe a porta que o servidor Express vai usar


// M - Model - Estrutura dos dados
// V - View - Frontend
// C - Controller - Interacao com a view