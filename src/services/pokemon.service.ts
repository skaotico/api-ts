import { pokemon } from '../interfaces/pokemon.interface';
import { Logger } from '../logs/logger';
import pokemonModel from '../models/pokemon.model';

const listarPokemonServ = async () => {
  Logger.info('pokemon.service.ts', 'listarPokemonServ', '');
  const responseItem = await pokemonModel.find({});
  if (responseItem == null) {
    return {
      data: 'objeto no encontrado',
    };
  }
  return responseItem;
};

// const insertPrueba = async (item: prueba) => {
//   Logger.info('pokemon.service.ts', 'ingresando con los datos .. ', `${item}`);
//   const pruebaC = await storageModel.create(item);
//   return pruebaC;
// };

const obtenerPokemon = async (id: String) => {
  Logger.info('pokemon.service.ts', 'obtenerPokemon', `${id}`);
  const pruebaC = await pokemonModel.findOne({ id: id });
  if (pruebaC == null) {
    return {
      data: 'objeto no encontrado',
    };
  }
  return pruebaC;
};

const insertPokemon = async (pokemon: pokemon[]) => {
  Logger.info(
    'pokemon.service.ts',
    'insertPokemon',
    `${JSON.stringify(pokemon)}`,
  );
  try {
    const valueInsert = await pokemonModel.create(pokemon);
    return valueInsert;
  } catch (error) {
    Logger.error('pokemon.service.ts', 'insertPokemon', `${error}`);
    return { data: 'error al generar el insert' };
  }
};

const eliminarPokemon = async (id: String) => {
  Logger.info('pokemon.service.ts', 'eliminarPokemon', `${id}`);

  try {
    const valueDelete = await pokemonModel.deleteOne({ id: id });
    return { data: 'objeto no encontrado' };
  } catch (error) {
    return { data: 'bojeto eliminado' };
  }
};

export { listarPokemonServ, insertPokemon, obtenerPokemon, eliminarPokemon };
