module.exports = (sequelize,DateTypes)=>{
    const StatusFesta = sequelize.define(
        "StatusFesta",
    {
        id:{
            type:DateTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
          },
          descricao:{
            type:DateTypes.STRING,
          allowNull:false,
          }
    },
    {
        tableName:"statusFesta"
    }
    );
    return StatusFesta;
}