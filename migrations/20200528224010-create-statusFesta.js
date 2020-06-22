'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('statusFesta',
      {
          id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
          },
          descricao:{
            type:Sequelize.STRING,
          allowNull:false,
          }
      }
       );
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('statusFesta');
    
  }
};
