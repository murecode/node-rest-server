import express from 'express';
import cors from 'cors';

import userRouter from '../routes/user.routes.js';
import dbConn from '../db/db-config.js';
// import { authRouter } from '../routes/auth.routes.js';

export default class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/users';
    // this.authPath = '/auth';

    this.paths = {
      // categories: '/restapi/categories'
    }

    // iniciar la conexion a DB
    this.dbConnection();

    // inicializar Midlewares
    this.middlewares();
    
    // inicializar paths de la app;
    this.routes();
  }

  routes() {
    // this.app.use(authRouter(this.authPath));
    // this.app.use(userRouter(this.user));
    this.app.use(this.usersPath, userRouter);
  }

  async dbConnection() {
    await dbConn();
  }

  //Middlewares globales
  middlewares() {
    //Acceso a Directorio publico
    this.app.use( express.static('public') );
    //CORS
    this.app.use( cors() );
    //Leer y Serializar a formato json respuestas del servidor
    this.app.use( express.json() );
  }

  listenPort() {
    this.app.listen( this.port, () => {
      console.log("Conectado al puerto", this.port)
    });
  }

}