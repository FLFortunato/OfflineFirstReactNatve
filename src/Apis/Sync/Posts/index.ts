import { PostsModel } from '../../Database/Models/posts.model';
import { PostsQuery } from '../../Database/Queries/posts.query';
import {
  POSTS_KEY,
  POSTS_TABLE_NAME,
} from '../../Database/Schemas/posts.schema';
import { endpoints } from '../endpoints';
import { SyncAbstract } from '../syncAbstract';
import { v4 as uuid } from 'uuid';

export const PostsSync = () => {
  const beforeSavingData = (data: any) => {
    const allData: PostsModel[] = data?.map((item) => ({
      ID: item.id,
      author: uuid(),
      ...item,
    }));

    return allData;
  };
  const { dataToBePosted, getUrl, maxItemsPerFlush, resetData, sync } =
    SyncAbstract({
      endPoint: endpoints.POSTS_URL,
      modelQuery: PostsQuery,
      tableKey: POSTS_KEY,
      tableName: POSTS_TABLE_NAME,
      beforeSavingItem: beforeSavingData,
    });

  return {
    dataToBePosted,
    getUrl,
    maxItemsPerFlush,
    resetData,
    sync,
    tableName: POSTS_TABLE_NAME,
  };
};
