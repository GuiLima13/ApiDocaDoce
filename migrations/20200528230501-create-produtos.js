'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('produtos'
      , 
      { 
        id:{
          type:Sequelize.INTEGER,
          autoIncrement:true,
          primaryKey:true,
          allowNull:false
        },
        idCategoriaProduto:{
          type: Sequelize.INTEGER,
            references:{
              model:'categoriaProduto',
              key:'id',
            },
        },
        idStatusProduto:{
          type: Sequelize.INTEGER,
            references:{
              model:'statusProduto',
              key:'id',
            },
        },
        descricao:{
          type:Sequelize.STRING,
          allowNull:false,
        },
        valorVenda:{
          type: Sequelize.INTEGER,
        },
        valorCusto:{
          type:Sequelize.INTEGER
        },
        desconto:{
          type:Sequelize.INTEGER,
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
    
      return queryInterface.dropTable('produtos');
    
  }
};
