const {Usuarios} = require('../models');
const UsuariosController ={

    index: async (req,res)=>{
        const usuarios = await Usuarios.findAll();


        return res.status(201).json(usuarios)
    },
    store:async (req,res)=>{

        const {nome,email,senha,telefone,cpf} = req.body
        
            const usuario = await Usuarios.create({
                nome,
                email,
                senha,
                telefone,
                cpf,
                ultimoAcesso: new Date(),
            })
            

            return res.status(201).json(usuario);
        
        
    }

}

module.exports = UsuariosController