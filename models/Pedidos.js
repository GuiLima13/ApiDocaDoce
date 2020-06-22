module.exports = (sequelize,DateTypes)=>{
    const Pedidos = sequelize.define(
        "Pedidos",
    {
        id:{
            type:DateTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
          },
          idUsuario:{
            type: DateTypes.INTEGER,
            allowNull:false,
          },
          idStatusPedido:{
            type: DateTypes.INTEGER,
          },
          idSuaFesta:{
            type: DateTypes.INTEGER,
              references:{
                model:'suaFesta',
                key:'id',
              },
          },
          valor:{
            type:DateTypes.INTEGER,
            allowNull:false,
          },
          idEndereco:{
            type: DateTypes.INTEGER,
          },
          valorFrete:{
            type:DateTypes.INTEGER
          },
          dataEntrega:{
            type:DateTypes.DATE,
          }
    },
    {
        tableName:"pedidos"
    }
    );
    return Pedidos;
}




