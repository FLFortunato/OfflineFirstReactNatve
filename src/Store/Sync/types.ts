export const SYNC_LOADING = 'SYNC_LOADING';
export const SYNC_DESCRIPTION = 'SYNC_DESCRIPTION';
export const SYNC_PERCENTAGE = 'SYNC_PERCENTAGE';
export const TRIGGER_SYNC = 'TRIGGER_SYNC';

export interface SyncStatusState {
  loading: boolean;
  status: { description: string; percentage: string };
}
