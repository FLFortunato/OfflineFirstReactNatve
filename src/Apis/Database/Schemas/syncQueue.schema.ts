export const SYNC_QUEUE_TABLE_NAME = 'syncQueue';
export const SYNC_QUEUE_TABLE_KEY = 'ID';

export const SyncQueueSchema = {
  name: SYNC_QUEUE_TABLE_NAME,
  primaryKey: SYNC_QUEUE_TABLE_KEY,
  properties: {
    ID: { type: 'string', indexed: true },
    entity: { type: 'string', indexed: true },
    key: 'string',
    data: 'string?',
    status: { type: 'string?', indexed: true },
    createdAt: 'date?',
    sentAt: 'date?',
    lastHttpStatus: 'int?',
    lastHttpMessage: 'string?',
    userID: 'string',
  },
};
