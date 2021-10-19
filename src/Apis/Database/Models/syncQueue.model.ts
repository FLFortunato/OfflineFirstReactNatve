export interface SyncQueueModel {
  ID: string;
  entity: string;
  key: string;
  data: string;
  status: string;
  createdAt: Date;
  sentAt?: Date;
  lastHttpStatus?: Number;
  lastHttpMessage?: string;
  userID: string;
}

export enum SyncQueueStatusEnum {
  PENDING = 'P',
  BATCHED = 'B',
  SENT = 'S',
  ERROR = 'E',
  INCONSISTENCY = 'I',
}
