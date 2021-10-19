export const GENERAL_STORAGE_TABLE_NAME = 'GeneralStorage';
export const GENERAL_STORAGE_TABLE_KEY = 'ID';

export const GeneralStorageSchema = {
  name: GENERAL_STORAGE_TABLE_NAME,
  primaryKey: GENERAL_STORAGE_TABLE_KEY,
  properties: {
    ID: { type: 'string', indexed: true },
    key: 'string',
    value: 'string',
  },
};
