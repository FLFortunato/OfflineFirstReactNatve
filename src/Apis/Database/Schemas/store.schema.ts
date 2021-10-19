export const STORE_TABLE_NAME = 'Store';
export const STORE_TABLE_KEY = 'ID';

export const StoreSchema = {
  name: STORE_TABLE_NAME,
  primaryKey: STORE_TABLE_KEY,
  properties: {
    ID: { type: 'string', indexed: true },
    key: 'string',
    value: 'string',
  },
};
