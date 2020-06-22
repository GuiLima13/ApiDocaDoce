module.exports = (sequelize,DateTypes)=>{
    const Enderecos = sequelize.define(
        "Enderecos",
        {
            id:{
                type:DateTypes.INTEGER,
                autoIncrement:true,
                primaryKey:true,
                allowNull:false
              },
              cep:{
                type:DateTypes.STRING,
                allowNull:false,
              },
              logradouro:{
                type:DateTypes.STRING,
                allowNull:false,
              },
              numero:{
                type:DateTypes.STRING,
                allowNull:false,
              },
              bairro:{
                type:DateTypes.STRING,
                allowNull:false,
              },
              estado:{
                type:DateTypes.STRING,
                allowNull:false,
              },
              cidade:{
                type:DateTypes.STRING,
                allowNull:false,
              },
              
        },
        {
            tableName:"enderecos",
        }
    );
    return Enderecos
}