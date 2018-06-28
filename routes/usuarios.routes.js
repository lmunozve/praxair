let express = require('express');
let router = express.Router();
let verifyToken = require('../middlewares/verifyToken.midd').verificarToken;
let usuarioController = require('../controller/usuario.controller').autenticarUsuario;
let createToken = require('../config/token.service').createToken;
router.get('/', function( req, res ) {
    // hacer algo por aquí.
});

router.get('/privada', verifyToken, function(req, res) {
    res.status(200).send('Esta ruta es privada');
});

router.post('/autenticar', function( req, res ) {
  let respuesta = usuarioController(req.body.username, req.body.password);
  respuesta
  .then((resp) => {
    if(resp.code === 200) {
        // Creamos el token usando la informaicón del usaurio almacenada en resp.data
        let token = createToken(resp.data);
        res.status(200).send({ token: token});
        return;
      }else {
        res.status(403).send({ error: "Encontramos un error al momento de autenticar al usuario"});
        return;
      }
    })    
});

module.exports = router;