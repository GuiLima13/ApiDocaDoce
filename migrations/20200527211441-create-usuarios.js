'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('usuarios'
      , 
      { 
        id:{
          type:Sequelize.INTEGER,
          autoIncrement:true,
          primaryKey:true,
          allowNull:false
        },
        idEndereco:{
          type: Sequelize.INTEGER,
            references:{
              model:'enderecos',
              key:'id'
            },
        },
        nome:{
          type:Sequelize.STRING,
          allowNull:false,
        },
        tipoUsuario:{
          type:Sequelize.STRING,
          allowNull:false,
        },
        email:{
          type:Sequelize.STRING,
          allowNull:false,
          unique:true,
        },
        senha:{
          type:Sequelize.STRING,
          allowNull:false
        },
        telefone:{
          type:Sequelize.STRING
        },
        cpf:{
          type:Sequelize.STRING,
          allowNull:false,
        },
        ultimoAcesso:{
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
    
      return queryInterface.dropTable('usuarios');
    
  }
};
