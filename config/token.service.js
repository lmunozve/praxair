var jwt = require('jwt-simple');
var moment = require('moment');
var TOKEN_SECRET = require('../config/env.service').TOKEN_SECRET;

module.exports.createToken = function(user) {
    var payload = {
        sub: user,
        iat: moment().unix(),
        exp: moment().add(1, "minutes").unix()
    };
    return jwt.encode(payload, TOKEN_SECRET);
}
