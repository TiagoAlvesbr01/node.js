SEQUENCIA PARA CRIAR O PROJETO
Criar o arquivo package
### npm init

Gerencia as requisições, rotas e URLs, entre outras funcionalidades
### npm install --save express

COMO RODAR O PROJETO BAIXADO
Instalar todas as dependencias indicada pelo package.json
### npm install

Rodar o projeto
### node app.js

Instalar a dependencia de forma global, "-g"signgica globalmente.
Executar o comando atraves do prompt de comando, executar somente se nunca instalou a dependencia na maquina, apos instalarm reiniciar o PC
### npm install -g nodemon

Instalar a dependencia como desenvolvedor para reiniciar o servidor sempre que houver alteração do código fonte.
### npm install --save-dev nodemon

Rodar o projeto usando o nodemon
### nodemon index.js

Abrir o endereço no navegador para acessar a página inicial
### http://localhost:8080

Comando SQL para criar a base de dados
### CREATE DATABASE tiago CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode-ci;

Sequelize é uma biblioteca JS que facilita o gerenciamento do banco de dados SQL
### npm install --save sequelize

Isntalar o drive do banco de dados
### npm install --save mysql2

Sequelize-cli interface de linha de comando usada para criar modelos, configuraçoes e arquivos de migração para bancos de dados
### npm install --save-dev sequelize-cli

Iniciar o Sequelize-cli e criar o arquivo config
### npx sequelize-cli init
