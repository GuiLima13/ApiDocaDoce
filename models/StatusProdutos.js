module.exports = (sequelize,DateTypes)=>{
    const StatusProduto = sequelize.define(
        "StatusProduto",
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
        tableName:"statusProduto"
    }
    );
    return StatusProduto;
}