// Incluir o arquivo com as variaveis de ambiente
require('dotenv').config()

// Exportar as credenciais do banco de dados
module.exports ={
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.envDB_BASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

