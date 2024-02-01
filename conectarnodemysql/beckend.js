let http = require('http')
let path = require('path')

let express = require('express')
let fs = require('fs')
let session = require('express-session')

let app = express()
let server = http.createServer(app)

app.use(express.json())
app.use(ex.urlencoded())
app.use(session({secret:'abc'}))

// configuraçoes
app.set('port', process.env.PORT || 3000)

// secao de login

app.use('/acesso-restrito/*', (req, res, next) => {
    if(req.session.nome){
        next();
    }else {
        res.redirect('/index.html')
    }
})

// faz buscar o arq dentro da pasta public 
app.use(express.static(path.join(__dirname, 'public')))

// start do server
server.listen(app.get('port'), () => {
    console.log('server na porta' , app.get('port'))


})

// vai pegar os arq do front e comparar com os do banco// login do front com o back
app.post('/login' , (req, res) => {
    let usuariocad = fs.readFileSync('./usuarios.json')
    let usuariosparse = JSON.parse(usuariocad)
    

    let nome = req.body.nomes
    let senha = req.body.senha

    for(let umUsuario of usuariosparse) {
        if(nome == umUsuario.nomr && senha ==umUsuario.senha) {
            req.session.nome == umUsuario
            res.send('conectado')
            return
        }
    }
    res.send('falhou')
})