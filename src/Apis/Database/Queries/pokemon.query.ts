import { PokemonModel } from '../Models/pokemon.model';
import {
  POKEMON_TABLE_KEY,
  POKEMON_TABLE_NAME,
} from '../Schemas/pokemon.schema';
import { BaseQuery } from './base.query';

export const PokemonQuery = BaseQuery<PokemonModel>({
  schemaName: POKEMON_TABLE_NAME,
  tableKey: POKEMON_TABLE_KEY,
});
