'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('pedidos'
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
        idStatusPedido:{
          type: Sequelize.INTEGER,
            references:{
              model:'statusPedido',
              key:'id',
            },
        },
        idSuaFesta:{
          type: Sequelize.INTEGER,
            references:{
              model:'suaFesta',
              key:'id',
            },
        },
        valor:{
          type:Sequelize.INTEGER,
          allowNull:false,
        },
        idEndereco:{
          type: Sequelize.INTEGER,
            references:{
              model:'enderecos',
              key:'id',
            },
        },
        valorFrete:{
          type:Sequelize.INTEGER
        },
        dataEntrega:{
          type:Sequelize.DATE,
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
    
      return queryInterface.dropTable('pedidos');
    
  }
};
