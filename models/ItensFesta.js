module.exports = (sequelize,DateTypes)=>{
    const ItensFesta = sequelize.define(
        "ItensFesta",
    {
        id:{
            type:DateTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
          },
          idSuaFesta:{
            type: DateTypes.INTEGER,
            allowNull:false,
          },
          idProduto:{
            type: DateTypes.INTEGER,
          },
          quantidade:{
            type:DateTypes.INTEGER,
            allowNull:false,
          },
          valor:{
            type:DateTypes.INTEGER,
            allowNull:false,
          }
    },
    {
        tableName:"itensFesta"
    }
    );
    return ItensFesta;
}




