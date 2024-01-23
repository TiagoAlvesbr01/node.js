//Incluir a dependencia
const mysql = require('mysql2');

//Criar a conexao com o banco de dados MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'tiago',
  });


  connection.connect(function (err){
    console.log('Conexão com banco de dados realizada com sucesso!')
  })

  connection.query("SELECT id, nome, email FROM usuarios", function (err, rows, fields) {
    if (!err) {
        console.log("Resultado:", rows)
    } else {
        console.log('Erro: Consulta não realizada com sucnesso!')
    }
  })