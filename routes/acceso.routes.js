let express = require('express');
let router = express.Router();

router.post('/validar', function( req, res ) {
    // hacer algo por aquí.
    console.log(req.body);
    res.send(req.body);
});

module.exports = router;