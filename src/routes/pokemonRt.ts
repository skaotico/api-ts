import { Request, Response, Router } from 'express';
import {
  eliminarPokCtrl, insertarPokCtrl, obtenerPokCtrl, listarPokCtrl
} from '../controllers/pokemon.controller';

const router = Router();
router.get('/pokemon/Listar', listarPokCtrl);
router.get('/pokemon/:id', obtenerPokCtrl);
router.post('/pokemon/insert', insertarPokCtrl);
router.delete('/pokemon/:id',eliminarPokCtrl);

export { router };
