var jwt = require('jwt-simple');
var moment = require('moment');
var TOKEN_SECRET = require('../config/env.service').TOKEN_SECRET;

module.exports.verificarToken = function( req, res, next) {
    if(!req.headers.authorization) {
        return res
                .status(403)
                .send({ message: 'Token no ha sido enviado'});
    }

    let token = req.headers.authorization.split(" ")[1];
    let payload = jwt.decode(token, TOKEN_SECRET);
    req.user = payload.sub;
    next();
}