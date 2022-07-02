'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Status', [
      {
        name: 'Pendente',
      },
      {
        name: 'Em andamento',
      },
      {
        name: 'Pronto',
      }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Status', null, {});
  }
};
