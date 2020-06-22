module.exports = (sequelize,DateTypes)=>{
    const SuaFesta = sequelize.define(
        "SuaFesta",
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
          idStatusFesta:{
            type: DateTypes.INTEGER,
          },
          valor:{
            type:DateTypes.INTEGER,
            allowNull:false,
          }
    },
    {
        tableName:"suaFesta"
    }
    );
    return SuaFesta;
}




