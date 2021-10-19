import { RandomPhotosQuery } from '../../Database/Queries/randomPhotos.query';
import {
  RANDOM_PHOTOS_TABLE_KEY,
  RANDOM_PHOTOS_TABLE_NAME,
} from '../../Database/Schemas/randomPhotos.schema';
import { endpoints } from '../endpoints';
import { SyncAbstract } from '../syncAbstract';

export const RandomPhotosSync = () => {
  const {
    dataToBePosted,
    getUrl,
    maxItemsPerFlush,
    resetData,
    sync,
    tableName,
  } = SyncAbstract({
    endPoint: endpoints.PHOTOS_URL,
    modelQuery: RandomPhotosQuery,
    tableKey: RANDOM_PHOTOS_TABLE_KEY,
    tableName: RANDOM_PHOTOS_TABLE_NAME,
  });

  return {
    dataToBePosted,
    getUrl,
    maxItemsPerFlush,
    resetData,
    sync,
    tableName,
  };
};
