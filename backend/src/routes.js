const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => { // Obter da rota padrao "/" uma requisicao e dar uma resposta
    return res.json({message: `Hello ${req.query.name}`}); // query busca os parametros passados na URL
    /* Nao e interessante enviar somente uma mensagem com "send" pelo servidor, geralmente envia-se um objeto json com uma chave */
});

module.exports = routes
