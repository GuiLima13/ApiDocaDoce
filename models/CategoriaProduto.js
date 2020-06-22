module.exports = (sequelize,DateTypes)=>{
    const CategoriaProduto = sequelize.define(
        "CategoriaProduto",
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
        tableName:"categoriaProduto"
    }
    );
    return CategoriaProduto;
}