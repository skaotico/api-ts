import express from 'express';
import { router } from './routes/mapRt';
import db from './config/mongo';
class App {
  public app: express.Application;
  // public pokemonRoute = new PokemonRoute();
  constructor() {
    this.app = express();
    this.app.use(express.json()); // se obtendran-generaran json
    this.app.use(express.urlencoded({ extended: true })); // que los json req y resp pudan tener sub categorias
    this.app.use(router);
    this.app.use(express.json({limit: '50mb'}));
    db().then(() => console.log('Conexion Ready'));
    // this.pokemonRoute.routes(this.app);
    /*this.app.route('/status').get((req, res) => {
      res.status(200).send({ status: 'sucess' });
    });*/
  }
}

export default new App().app;
