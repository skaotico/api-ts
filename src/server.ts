import app from './app';
import { Logger } from './logs/logger';

const PORT = process.env.API_PORT; // de utiliza el  moduloi de dontenv para poder usar las variables de entorno
Logger.info('server.ts', 'api runner in port', `${process.env.API_PORT}`);
app.listen(PORT);
