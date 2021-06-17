const Server = require('./models/server');

require('dotenv').config();


// Creamos la instancia de la clase del servidor
const server = new Server();


// Lanzamos el metodo listen definido en la clase del servidor para levantarlo
server.listen();
 

 
