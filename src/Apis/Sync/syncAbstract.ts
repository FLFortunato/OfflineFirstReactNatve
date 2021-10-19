import { HttpService } from '../../Services/http.service';
import { SyncQueueStatusEnum } from '../Database/Models/syncQueue.model';
import { PostsQuery } from '../Database/Queries/posts.query';

type syncAbstractProps = {
  syncName?: string;
  tableName?: string;
  tableKey: string;
  modelQuery: any;
  endPoint: string;
  maxItemsPerFlush?: number | undefined;
  beforeSavingItem?: (args: any) => any;
};

export interface SyncAbstractReturn {
  resetData: (args?: any) => any;
  dataToBePosted: (args?: any) => { data: any; ID: string };
  getUrl: (args?: any) => any;
  sync: () => void;
  maxItemsPerFlush: number;
  tableName: string;
}
export const SyncAbstract = ({
  endPoint,
  modelQuery,
  syncName,
  tableKey,
  tableName,
  maxItemsPerFlush = 0,
  beforeSavingItem,
}: syncAbstractProps) => {
  const sync = async () => {
    try {
      const { data } = await HttpService().get(endPoint);
      saveDataInRealm(data);
    } catch (error) {
      console.warn(`Error syncing ::${tableName}::`, error);
    }
  };

  const saveDataInRealm = (data: any[]) => {
    try {
      console.log(`SYNCING:: ${tableName}`);
      if (data?.length) {
        if (beforeSavingItem) {
          modelQuery?.createByList(beforeSavingItem(data));
        } else {
          modelQuery.createByList(data);
        }
      }
    } catch (error) {}
  };

  const dataToBePosted = (key?: string) => {
    let data = modelQuery?.findBy(tableKey, key)?.[0];

    const ID = data.ID;
    if (ID) {
      delete data.ID;
    }
    return { data, ID };
  };

  const getUrl = () => {
    return endPoint;
  };

  const resetData = () => {
    return 'opa';
  };

  return {
    resetData,
    dataToBePosted,
    getUrl,
    maxItemsPerFlush,
    sync,
    tableName,
  };
};
