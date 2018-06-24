let express = require('express');
let bodyParser = require('body-parser');
let usuarios_route = require('./routes/usuarios.routes');
let productos_route = require('./routes/productos.routes');
const port = 3000;

let app = express();
// configuraciones
app.set('view engine', 'ejs');
app.set('views', __dirname +'/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// rutas
app.use('/usuarios', usuarios_route);
app.use('/productos', productos_route);

app.get('/', function(req, res) {
    let obj = {nombre: "Luis", email: "luenmuvel@gmail.com", nacionalidad: "peruano", ciudades: ["lima", "ica", "tumbes", "iquitos"]};
    res.render('index', {nombre: "Jose", objeto: JSON.stringify(obj)});
});

app.get('/login', function( req, res) {
    res.render('login');
});

app.listen(port, function() {
    console.log("Escuchando en el puerto", port);
})