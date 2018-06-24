let express = require('express');
let bodyParser = require('body-parser');
const port = 3000;

let app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.listen(port, function() {
    console.log("Escuchando en el puerto", port);
})