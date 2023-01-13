import { Request, Response, Router } from 'express';
import { listarDigimonCtrl } from '../controllers/digimon.controller';

const router = Router();
router.get('/listar', listarDigimonCtrl);

export { router };
