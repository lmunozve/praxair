let validarModel = require('../model/validar.model');
let usuarioModel = require('../model/usuario.model');

async function validarAcceso(nombre, apellidos, username, password) {
    let est = await validarModel.conexion.estadoConexion().then((estado) => {
        return estado;
    });

    if(est) {
        usuarioModel.sequelize.sync()
        .then(() => usuarioModel.usuario.create({
            nombre: nombre,
            apellidos: apellidos,
            username: username,
            password: password
        }))
        .then(info => {
            console.log(info.toJSON());
        })
        .catch(err => {
            console.log("error!!!")
            console.log(err)
        });
    }else {
        console.log("Tuvimos un error");
    }

    // esperar respuesta
    // devolver respuesta formateada
};

function restringirAcceso() {
    // restringir el acceso a un usuario
}

// module.exports.validarAcceso = validarAcceso;
// module.exports.restringirAcceso = restringirAcceso;

module.exports = {
    validarAcceso: validarAcceso,
    restringirAcceso: restringirAcceso
}