import { Router } from 'express';
import { readdirSync } from 'fs';
import { Logger } from '../logs/logger';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

/**
 *
 * @returns
 */
const cleanFileName = (fileName: string) => {
  const file = fileName.substring(0, fileName.indexOf('.'));

  return file;
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);

  if (cleanName !== 'mapRt') {
    Logger.info('routes.mapRT', 'cargando route ...', `${fileName}`);
    import(`./${cleanName}`).then((moduleRouter) => {
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
