// Incluir o arquivo com as variaveis
require('dotenv').config()

// Normatizar o codiggo, ajuda evitar gambiarras
'use strict';

// Permite trabalhar com o sistema de arquivos do pc
const fs = require('fs');
//Fornece utilitario
const path = require('path');

const Sequelize = require('sequelize');

const process = require('process');

const basename = path.basename(__filename);

const env = process.env.NODE_ENV;
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
//Verificar a conexao com banco de dados
try{
  console.error("Conexao com o banco de dados realizada com sucesso")
} catch(error) {
   console.error("Erro: Conexao com o  banco de dados não realizada com sucesso", error)
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
