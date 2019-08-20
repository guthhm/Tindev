const express = require('express') // Importa o express
const DevController = require('./controller/dev_controller')
const LikeController = require('./controller/like_controller')
const DislikeController = require('./controller/dislike_controller')

const routes = express.Router() // Função que cria um objeto específico para rotas

/*routes.get('/', (req, res) => { // Obter da rota padrao "/" uma requisicao e dar uma resposta
    return res.json({message: `Hello ${req.query.name}`}); // query busca os parametros passados na URL
    /* Nao e interessante enviar somente uma mensagem com "send" pelo servidor, geralmente envia-se um objeto json com uma chave 
});

routes.post('/devs', (req, res) => {
    return res.json(req.body)  // Recebe como JSON o corpo da requisicao
})*/

routes.get('/devs', DevController.index)

routes.post('/devs', DevController.store)
routes.post('/devs/:devID/likes', LikeController.store)
routes.post('/devs/:devID/dislikes', DislikeController.store)

module.exports = routes // Expõe a variável routes para o servidor
