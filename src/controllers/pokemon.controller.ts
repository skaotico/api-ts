import { Request, Response } from 'express';
import {
  listarPokemonServ,
  insertPokemon,
  obtenerPokemon,
  eliminarPokemon
} from '../services/pokemon.service';

const listarPokCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await listarPokemonServ();
  res.send(responseUser);
};

 
const obtenerPokCtrl = async ({ params  }: Request, res: Response) => {
const {id} = params;
const responseUser = await obtenerPokemon(id);
  res.send(responseUser);
};

const insertarPokCtrl = async ({ body }: Request, res: Response) => {
  const responsePokemon = await insertPokemon(body);
  res.send(responsePokemon);
};

const eliminarPokCtrl = async ({ params  }: Request, res: Response) => {
  const {id} = params;
  const responsePokemon  = await eliminarPokemon(id);
  return responsePokemon;
}

export { eliminarPokCtrl, insertarPokCtrl, obtenerPokCtrl, listarPokCtrl };
