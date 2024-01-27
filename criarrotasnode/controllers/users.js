// Incluir as bibliotecas
// Gerencia as requisiçoes, rotas e URLs, entre outras funcionalidades
let express = require('express')
// Chamar a função
let router = express.Router()

// Criar a rota cadastrar
router.post("/users", async (req, res) => {
    return res.json({
        mensagem: ("Usuario cadastrado com sucesso!")
    })
})

// Exportar a instrução que esta dentro da let router
module.exports = router