import { STORE_TABLE_KEY, STORE_TABLE_NAME } from '../Schemas/store.schema';
import { BaseQuery } from './base.query';

export const StoreQuery = BaseQuery({
  schemaName: STORE_TABLE_NAME,
  tableKey: STORE_TABLE_KEY,
});
