import { Schema, Types, model, Model } from 'mongoose';
import { prueba } from '../interfaces/prueba.interface';

const StorageSchema = new Schema<prueba>(
  {
    english: {
      type: String,
    },
    japanese: {
      type: String,
    },
    chinese: {
      type: String,
    },
    french: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const StorageModel = model('prueba', StorageSchema);
export default StorageModel;
