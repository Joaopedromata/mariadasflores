'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      first_name: {
        type: Sequelize.STRING ,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING ,
        allowNull: false
      },
      phone_number: {
        type: Sequelize.STRING ,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING ,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }

    });


  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
