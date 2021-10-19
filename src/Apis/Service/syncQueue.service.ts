import {
  SyncQueueModel,
  SyncQueueStatusEnum,
} from '../Database/Models/syncQueue.model';
import { v4 as uuid } from 'uuid';
import { syncQueueQuery } from '../Database/Queries/syncQueue.query';
import { HttpService } from '../../Services/http.service';
import { SyncQueueRegisteredEntities } from '../Sync/syncQueueRegistredEntities';
import { SyncAbstractReturn } from '../Sync/syncAbstract';
import NetInfo from '@react-native-community/netinfo';

export const SyncQueueService = () => {
  type enqueueType = {
    entity: string;
    key: string;
    data: string;
    userID: string;
  };

  let flushItemsArray: any[] = [];

  const enqueue = ({ entity, key, data, userID }: enqueueType) => {
    const syncQueue: SyncQueueModel = {
      ID: uuid(),
      entity,
      key,
      userID,
      data: JSON.stringify(data),
      createdAt: new Date(),
      status: SyncQueueStatusEnum.PENDING,
    };

    syncQueueQuery.create(syncQueue);
    flushItem(syncQueue);
  };

  const sendData = async (syncQueue: SyncQueueModel): Promise<any> => {
    const returnedSyncQueue: SyncQueueModel = {
      ID: syncQueue.ID,
      entity: syncQueue.entity,
      key: syncQueue.key,
      data: syncQueue.data,
      status: syncQueue.status,
      createdAt: syncQueue.createdAt,
      sentAt: syncQueue.sentAt,
      lastHttpStatus: syncQueue.lastHttpStatus,
      lastHttpMessage: syncQueue.lastHttpMessage,
      userID: syncQueue.userID,
    };

    if (Object.keys(returnedSyncQueue).length) {
      const obj: SyncAbstractReturn =
        SyncQueueRegisteredEntities[returnedSyncQueue.entity];

      const { data: entityData } = obj.dataToBePosted(returnedSyncQueue.key);

      try {
        //Before sending, its necessary to check if data is available in returnedSyncQueue object, if not we get it from realm using the key
        const data = JSON.parse(returnedSyncQueue.data) || entityData;

        const response = await HttpService().post(obj.getUrl(), data);

        returnedSyncQueue.lastHttpStatus = response.status;
        returnedSyncQueue.lastHttpMessage = JSON.stringify(response.data);

        // Status 2XX = Success, else = Error
        returnedSyncQueue.status =
          response.status >= 200 && response.status < 300
            ? SyncQueueStatusEnum.SENT
            : SyncQueueStatusEnum.ERROR;
      } catch (error) {
        console.warn(error);
        const errorStatus = error?.response?.status || 0;
        returnedSyncQueue.lastHttpStatus = errorStatus;
        returnedSyncQueue.lastHttpMessage = JSON.stringify(
          error?.response?.data
        );
        returnedSyncQueue.status = SyncQueueStatusEnum.ERROR;
      }

      // Updates the last HTTP status and message
      returnedSyncQueue.sentAt = new Date();

      // Updates in the RealmDB

      syncQueueQuery.update(returnedSyncQueue);
    } else {
      syncQueueQuery.update({
        ...returnedSyncQueue,
        status: SyncQueueStatusEnum.INCONSISTENCY,
      });
    }
  };

  const flushItem = async (item: SyncQueueModel) => {
    const checkConnectivity = await NetInfo.fetch();
    try {
      if (!checkConnectivity.isConnected) {
        return;
      } else {
        await sendData(item);
      }
    } catch (error) {
      console.warn('Error flushing item', JSON.stringify(item));
    }
  };

  const flushAllPendingItems = async (entity?: string) => {
    const checkConnectivity = await NetInfo.fetch();

    if (!checkConnectivity.isConnected) {
      if (flushItemsArray?.length) {
        flushItemsArray?.map((item) => ({ ...item, flushing: false }));
      }
      return;
    }

    let allPendingItemsArray = [] as SyncQueueModel[];

    const pendingItems = getPendingItems(entity);

    if (pendingItems) {
      if (!flushItemsArray?.length) {
        // If pendingItems we then  loop through the pendingItems and add to flushItemsArray the objects
        // with entity and flush properties, we also add the item to allPendingItemsArray
        pendingItems?.forEach((item: any) => {
          flushItemsArray?.push({ key: item.key, flushing: true });
          allPendingItemsArray.push(item);
        });
      } else {
        // If any items in flushItemsArray already, we loop through the pendingItems finding the reamining objects and add them to flushItemsArray and allPendingItemsArray
        pendingItems?.forEach((pending: any) => {
          const flushingItem = flushItemsArray?.find(
            (item) => item.key === pending.key
          );

          if (flushingItem) {
            if (flushingItem.flushing) {
              return;
            }
            flushingItem.flushing = true;
          } else {
            flushItemsArray.push({
              key: pending.key,
              flushing: true,
            });
          }

          allPendingItemsArray.push(pending);
        });
      }
    }
    if (allPendingItemsArray?.length) {
      let promiseArray: any[] = [];
      const groupedObjects = groupDataByEntity(allPendingItemsArray);

      Object.keys(groupedObjects).forEach((entity) => {
        const requests = groupedObjects[entity];

        const actualObjectBeingSynced: SyncAbstractReturn =
          SyncQueueRegisteredEntities[entity];

        if (
          requests?.length >= (actualObjectBeingSynced?.maxItemsPerFlush || 100)
        ) {
          // Yet to be implemented
          const splitedItems = splitItemsToBeBatched(
            requests,
            actualObjectBeingSynced?.maxItemsPerFlush || 10
          );
        } else {
          requests.forEach((item) => {
            promiseArray.push(sendData(item));
          });
        }
      });

      Promise.all(promiseArray)
        .then((res) => console.tron.log({ res }))
        .catch((e) => console.tron.log({ e }));
    }
  };

  const splitItemsToBeBatched = (items: SyncQueueModel[], maxItems: number) => {
    let returnedItems: SyncQueueModel[][] = [];

    while (items?.length > 0) {
      returnedItems?.push([...items?.splice(0, maxItems)]);
    }

    return returnedItems;
  };

  const getPendingItems = (entity?: string) => {
    let query = `status == '${SyncQueueStatusEnum?.PENDING}'`;
    if (entity) {
      query = ` and entity == '${entity}'`;
    }
    const results = syncQueueQuery.queryBy(query);
    return results;
  };

  const groupDataByEntity = (syncQueueObjArr: SyncQueueModel[]) => {
    //This function changed my life
    let grouped: any = {};

    syncQueueObjArr?.forEach((item) => {
      if (!grouped[item.entity]) {
        grouped[item.entity] = [];
      } else {
        grouped[item.entity].push(item);
      }
    });

    return grouped;
  };

  return {
    enqueue,
    sendData,
    flushAllPendingItems,
    getPendingItems,
  };
};
