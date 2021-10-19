export const POKEMON_TABLE_NAME = 'Pokemons';
export const POKEMON_TABLE_KEY = 'ID';

export const PokemonSchema = {
  name: POKEMON_TABLE_NAME,
  primaryKey: POKEMON_TABLE_KEY,
  properties: {
    ID: { type: 'string', indexed: true },
    name: 'string',
    url: 'string',
  },
};
