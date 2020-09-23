'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('addresses', { 
      id: {
        type: Sequelize.INTEGER ,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
      },
      zipcode: {
        type: Sequelize.STRING ,
        allowNull: false
      },
      street: {
        type: Sequelize.STRING ,
        allowNull: false
      },
      neighborhood: {
        type: Sequelize.STRING ,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING ,
        allowNull: false
      },
      state: {
        type: Sequelize.STRING ,
        allowNull: false
      },
      number: {
        type: Sequelize.INTEGER ,
        allowNull: false
      },
      complement: {
        type: Sequelize.STRING ,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER ,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('addresses');
  }
};
