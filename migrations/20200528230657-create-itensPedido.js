'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('itensPedido'
      , 
      { 
        id:{
          type:Sequelize.INTEGER,
          autoIncrement:true,
          primaryKey:true,
          allowNull:false
        },
        idPedido:{
          type: Sequelize.INTEGER,
            references:{
              model:'pedidos',
              key:'id',
            },
        },
        idProduto:{
          type: Sequelize.INTEGER,
            references:{
              model:'produtos',
              key:'id',
            },
        },
        quantidade:{
          type:Sequelize.INTEGER,
          allowNull:false,
        },
        valor:{
          type: Sequelize.INTEGER,
          allowNull: false

        },
        valorFrete:{
          type:Sequelize.INTEGER,
          allowNull: false
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
    
      return queryInterface.dropTable('itensPedido');
    
  }
};
