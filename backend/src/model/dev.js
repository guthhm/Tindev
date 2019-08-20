const { Schema, model } = require('mongoose') // Importa de dentro do Mongoose o Schema e model; As chavess sao um recurso do JS chamado desestruturacao

const DevSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    bio: String,
    avatar: {
        type: String,
        required: true
    }, 
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'dev'
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'dev'
    }]
}, {
    timestamps: true, // Cria uma coluna 'createdAt' com informacoes sobre a data de criacao de um dado e uma coluna 'updatedAt' com informacoes sobre sua ultima alteracao
})

module.exports = model('Dev', DevSchema)