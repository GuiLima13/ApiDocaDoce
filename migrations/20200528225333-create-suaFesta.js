'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('suaFesta'
      , 
      { 
        id:{
          type:Sequelize.INTEGER,
          autoIncrement:true,
          primaryKey:true,
          allowNull:false
        },
        idUsuario:{
          type: Sequelize.INTEGER,
            references:{
              model:'usuarios',
              key:'id',
            },
        },
        idStatusFesta:{
          type: Sequelize.INTEGER,
            references:{
              model:'statusFesta',
              key:'id',
            },
        },
        valor:{
          type:Sequelize.INTEGER,
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
    
      return queryInterface.dropTable('suaFesta');
    
  }
};
