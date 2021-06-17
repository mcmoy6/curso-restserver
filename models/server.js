const express = require('express');
const cors = require('cors');


class Server {

     constructor() {

        this.app = express();
        this.port = process.env.PORT; // Establecemos el puerto
        this.usuariosPath = '/api/usuarios';

        // Disparamos Middelweres, es una funcion que siempre va a ejecutarse cuando levantemos el servidor
        this.middelweres();

        // Disparamos el metodo que definimos para las rutas de la aplicacion
        this.routes();

     }


     middelweres() {

        // CORS
        this.app.use( cors() );

        // Lectura desde el body
        this.app.use( express.json() );
          
        // Hacemos referencia al directorio de la carpeta public
        this.app.use( express.static('public'));
     }

     // Metodo para definir las rutas
     routes() {

        this.app.use(this.usuariosPath, require('../routes/usuarios'));
     }

     // Metodo para escuchar el puerto el cual definimos

     listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corroendo en el puerto', this.port);
        });
     }

}

module.exports = Server;