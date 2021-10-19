import { Digimon } from '../Models/digimon.model';
import {
  DIGIMON_TABLE_KEY,
  DIGIMON_TABLE_NAME,
} from '../Schemas/digimon.schema';
import { BaseQuery } from './base.query';

export const digimonQuery = BaseQuery<Digimon>({
  schemaName: DIGIMON_TABLE_NAME,
  tableKey: DIGIMON_TABLE_KEY,
});
