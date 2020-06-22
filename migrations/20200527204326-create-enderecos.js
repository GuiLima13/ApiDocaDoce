'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('enderecos',
      { 
        id:{
          type:Sequelize.INTEGER,
          autoIncrement:true,
          primaryKey:true,
          allowNull:false
        },
        cep:{
          type:Sequelize.STRING,
          allowNull:false,
        },
        logradouro:{
          type:Sequelize.STRING,
          allowNull:false,
        },
        numero:{
          type:Sequelize.STRING,
          allowNull:false,
        },
        bairro:{
          type:Sequelize.STRING,
          allowNull:false,
        },
        estado:{
          type:Sequelize.STRING,
          allowNull:false,
        },
        cidade:{
          type:Sequelize.STRING,
          allowNull:false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }

      });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('enderecos');
    
  }
};
