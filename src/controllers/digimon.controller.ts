// import { DigimonService } from '../services/digimon.service';
// import { Request, Response } from 'express';
// export class digimonController {
//   private digimonService: DigimonService;

//   constructor() {
//     this.digimonService = new DigimonService();
//   }

//   public listarPokemon = (req: Request, res: Response) => {
//     const apiStatus = this.digimonService.listarDigimon();
//     res.status(200).send(apiStatus);
//   };
// }

import { Request, Response } from 'express';
import { listarDigimon } from '../services/digimon.service';

const listarDigimonCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await listarDigimon();
  res.send(responseUser);
};

export { listarDigimonCtrl };
