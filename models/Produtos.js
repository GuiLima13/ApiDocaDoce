module.exports = (sequelize,DateTypes)=>{
    const Produtos = sequelize.define(
        "Produtos",
    {
        id:{
            type:DateTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
          },
          idCategoriaProduto:{
            type: DateTypes.INTEGER,
          },
          idStatusProduto:{
            type: DateTypes.INTEGER,
          },
          descricao:{
            type:DateTypes.STRING,
            allowNull:false,
          },
          valorVenda:{
            type: DateTypes.INTEGER,
          },
          valorCusto:{
            type:DateTypes.INTEGER
          },
          desconto:{
            type:DateTypes.INTEGER,
          }
    },
    {
        tableName:"produtos"
    }
    );
    return Produtos;
}




