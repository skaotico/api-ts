import { NamePokemonInterface } from './name.pokemon.interface';
import { TypeClassPokemonInterface } from './typeClass.pokemon';
import { basePokemonInterface } from './base.pokemon.interface';

export interface pokemon {
  id: number;
  name: NamePokemonInterface;
  nature: TypeClassPokemonInterface;
  base: basePokemonInterface;
}
