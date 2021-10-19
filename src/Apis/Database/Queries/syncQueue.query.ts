import { SyncQueueModel } from '../Models/syncQueue.model';
import {
  SYNC_QUEUE_TABLE_KEY,
  SYNC_QUEUE_TABLE_NAME,
} from '../Schemas/syncQueue.schema';
import { BaseQuery } from './base.query';

export const syncQueueQuery = BaseQuery<SyncQueueModel>({
  schemaName: SYNC_QUEUE_TABLE_NAME,
  tableKey: SYNC_QUEUE_TABLE_KEY,
});
