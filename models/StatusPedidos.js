module.exports = (sequelize,DateTypes)=>{
    const StatusPedido = sequelize.define(
        "StatusPedido",
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
        tableName:"statusPedido"
    }
    );
    return StatusPedido;
}