let validarModel = require('../model/validar.model');
let usuarioModel = require('../model/usuario.model');

async function autenticarUsuario(username, password) {
    let est = await validarModel.conexion.estadoConexion().then((estado) => {
        return estado;
    });

    if(est) {
        return usuarioModel.usuario.find({
            where: {
                username: 'luenmuvel',
                password: '123'
            }
        })
        .then((tabla) => {
            return {
                data: tabla.dataValues,
                code: 200
            }
        })
        .catch((err) => {
            return {
                code: 403,
                error: err
            }
        });
    }else {
        console.log("Tuvimos un error");
    }

    // esperar respuesta
    // devolver respuesta formateada
};

module.exports = {
    autenticarUsuario: autenticarUsuario
}