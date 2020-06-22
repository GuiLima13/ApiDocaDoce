module.exports = (sequelize,DateTypes)=>{
    const ItensPedido = sequelize.define(
        "ItensPedido",
    {
        id:{
            type:DateTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
          },
          idPedido:{
            type: DateTypes.INTEGER,
          },
          idProduto:{
            type: DateTypes.INTEGER,
          },
          quantidade:{
            type:DateTypes.INTEGER,
            allowNull:false,
          },
          valor:{
            type: DateTypes.INTEGER,
            allowNull: false
  
          },
          valorFrete:{
            type:DateTypes.INTEGER,
            allowNull: false
          }
    },
    {
        tableName:"itensPedido"
    }
    );
    return ItensPedido;
}




