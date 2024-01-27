// Incluir as bibliotecaas
// Gerencia as requisicoes, rotas e URLs, entre outras funcionalidades
let express = require('express')

// Chamar a função express
let app = express()

// Incluir as CONTROLLERS
let users = require('./controllers/users')

// Criar as rotas
app.use('/', users)

// Criar a rota do tipo GET direcionado a pagina inicial do site
app.get('/', function (req, res) {
    res.send('Página inicial do site')
  })
  
  // Criar a rota do tipo GET direcionado a pagina sobre empresa do site
app.get('/sobre-empresa', (req, res)  => {
    res.send('Página sobre empresa do site')
  })

  // Criar a rota do tipo GET direcionado a pagina sobre empresa do site
app.get('/contato', (req, res)  => {
    res.send('Página sobre contato do site!')
  })

  // Iniciar o servidor na porta 8080
  app.listen(8080, () =>{
    console.log('Servidor iniciado na porta 8080 http://localhodt:8080')
  })

