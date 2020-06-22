

module.exports = (sequelize,DateTypes) =>{
    const Usuarios =  sequelize.define(
       "Usuarios",
        {
            id:{
                type: DateTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true,
                allowNull:false,
            },
            idEndereco:{
                type: DateTypes.INTEGER
            },
            nome:{
                type:DateTypes.STRING,
                allowNull:false,
            },
            email:{
                type:DateTypes.STRING,
                allowNull:false,
                unique:true,
            },
            senha:{
                type:DateTypes.STRING,
                allowNull:false,
            },
            telefone:{
                type:DateTypes.STRING,
            },
            cpf:{
                type:DateTypes.STRING,
                allowNull:false,
            },
            ultimoAcesso:{
                type:DateTypes.DATE,
            },
        },
        {
            tableName:"usuarios",
        }
    )
    /*Usuarios.associate = (models)=>{
        Usuarios.hasMany(models.Publication,{
            foreignKey:"users_id",
        });
    }
    */
       
        return Usuarios;
};

