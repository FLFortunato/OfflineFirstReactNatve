import { GeneralStorageModel } from '../Models/generalStorage.model';
import {
  GENERAL_STORAGE_TABLE_KEY,
  GENERAL_STORAGE_TABLE_NAME,
} from '../Schemas/generalStorage.schema';
import { BaseQuery } from './base.query';

export const GeneralStorageQuery = BaseQuery<GeneralStorageModel>({
  schemaName: GENERAL_STORAGE_TABLE_NAME,
  tableKey: GENERAL_STORAGE_TABLE_KEY,
});
