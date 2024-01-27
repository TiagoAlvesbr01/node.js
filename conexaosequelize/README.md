COMO RODAR O PROJETO BAIXADO
Instalar todas as dependencias indicada pelo package.json
### npm install

Criar a base de dados no MySQL com o nome "tiago"
Alterar as credenciais do banco de dados no arquivo "db/config/cnfig.js

Criar a base de dados "tiago" no banco de dados MySQL, necessario ter o MySQL instalado na máquina e rodando
### CREATE DATABASE tiago CHARACTER SET 

Alterar no projeto as credenciais do banco de dados no arquivo ".env"

Rodar o projeto
### node.js


SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init

Sequelize é uma biblioteca que facilita gerenciamento do banco de dados SQL
### npm install --save sequelize

Instalar o drive do banco de dados
### npm install --save mysql2

Sequelize-cli interface de linha de comando usada para criar modelos, configuraçoes e arquivos de migraçao para banco de dados
### npm install --save-dev sequelize-cli

Iniciar o Sequelize-cli e criar o arquivo config
### npx sequelize-cli init

Manipular variaveis de ambiente
### npm install --save dotenv

Criar a migration
### npx sequelize-cli migration:generate --name create-users

Executar as migrations
### npx sequelize-cli db:migrate

Executar down - rollback - Permite que seja desfeita a migration, permitindo a gestão das alteraçoes do banco de dados, versionamento
### npx sequelize-cli db:migrate:undo --name nome-da-migration

Criar a Models users
### npx sequelize-cli model:generate --name Users --attributes name:string,email:string,image:string