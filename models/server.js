const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const { createServer } = require('http');

class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = createServer(this.app);

    this.paths = {
      uploads: '/api/uploads',
    }

    // this.authPath     = '/api/auth';
    // this.usuariosPath = '/api/usuarios';

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    // Fileupload - Carga de archivos
    this.app.use(fileUpload({
      useTempFiles : true,
      tempFileDir : '/tmp/',
      createParentPath: true
    }));

  }

  routes() {
    this.app.use(this.paths.uploads, require('../routes/uploads'));
  }

  listen() {
    this.server.listen( this.port, () => {
      console.log('Servidor corriendo en puerto', this.port);
    });
  }

}

module.exports = Server;