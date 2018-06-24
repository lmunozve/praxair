let Sequelize = require('sequelize');
let sequelize = require('./conexion.conf').sequelize;

const usuario = sequelize.define('usuario', {
    nombre: Sequelize.STRING,
    apellidos: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING
});

module.exports.usuario = usuario;
module.exports.sequelize = sequelize;