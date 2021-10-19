export const DIGIMON_TABLE_NAME = 'Digimon';
export const DIGIMON_TABLE_KEY = 'ID';

export const DigimonSchema = {
  name: DIGIMON_TABLE_NAME,
  primaryKey: DIGIMON_TABLE_KEY,
  properties: {
    ID: { type: 'string', indexed: true },
    name: 'string',
    img: 'string',
    level: 'string',
  },
};
