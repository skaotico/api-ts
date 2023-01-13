import { Request, Response, Router } from 'express';

const router = Router();
router.get('/', (req: Request, res: Response) => {
  res.send({ data: 'esta es solo una prueba' });
});

export { router };
