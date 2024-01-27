'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Users', 'Imagem', {
          type: Sequelize.DataTypes.STRING,
          after: "email"
        }, { transaction: t }),

      ]);
    });
  },

  //down - rollback - Permite que seja desfeita a migration, permitindo a gestão das alteraçoes do banco de dados, versionamento
  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction( t => {
      return Promise.all([
        queryInterface.removeColumn('Users', 'image', {transaction: t})
      ])
    })
  }
};
