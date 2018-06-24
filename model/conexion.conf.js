let Sequelize = require('sequelize');
const sequelize = new Sequelize('Prueba2', 'pxNode', 'pxperu$01', {
  host: '10.100.0.56',
  dialect: 'mssql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

// comprobar el estado de la conexión
function comprobarConexion() {
  return sequelize.authenticate()
         .then(() => {
          // console.log("Estado:", true);
          return true;
         })
         .catch(err => {
            console.log(err);
            return false;
         })
};

module.exports = {
  sequelize: sequelize,
  estadoConexion: comprobarConexion
}