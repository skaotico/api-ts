import { Schema, Types, model, Model } from 'mongoose';
import { pokemon } from '../interfaces/pokemon.interface';

const pokemonSchema = new Schema<pokemon>({
  id: {
    type: 'Number',
  },
  name: {
    english: {
      type: 'String',
      required: true,
    },
    japanese: {
      type: 'String',
      required: true,
    },
    chinese: {
      type: 'String',
      required: true,
    },
    french: {
      type: 'String',
      required: true,
    },
  },
  nature: {
    type: ['String'],
    required: true,
  },
  base: {
    HP: {
      type: 'Number',
      required: true,
    },
    Attack: {
      type: 'Number',
      required: true,
    },
    Defense: {
      type: 'Number',
      required: true,
    },
    Sp_Attack: {
      type: 'Number',
      required: true,
    },
    Sp_Defense: {
      type: 'Number',
      required: true,
    },
    Speed: {
      type: 'Number',
      required: true,
    },
  },
});

const   pokemonModel = model('pokemon-collection', pokemonSchema);
export default pokemonModel;
