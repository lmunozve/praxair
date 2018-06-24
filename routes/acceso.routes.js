let express = require('express');
let router = express.Router();

let validar = require('../controller/validar.controller');

router.post('/validar', function( req, res ) {
    validar.validarAcceso(
        req.body.nombre, 
        req.body.apellidos, 
        req.body.username, 
        req.body.password);
});

module.exports = router;