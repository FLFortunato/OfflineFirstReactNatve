import {
  RANDOM_PHOTOS_TABLE_KEY,
  RANDOM_PHOTOS_TABLE_NAME,
} from '../Schemas/randomPhotos.schema';
import { BaseQuery } from './base.query';

export const RandomPhotosQuery = BaseQuery({
  schemaName: RANDOM_PHOTOS_TABLE_NAME,
  tableKey: RANDOM_PHOTOS_TABLE_KEY,
});
