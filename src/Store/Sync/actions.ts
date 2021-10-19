import { SYNC_DESCRIPTION, SYNC_LOADING, TRIGGER_SYNC } from './types';

export const syncLoading = (payload: any) => {
  return {
    type: SYNC_LOADING,
    payload,
  };
};

export const syncDescription = (payload: any) => {
  return {
    type: SYNC_DESCRIPTION,
    payload,
  };
};

export const triggerSyncService = (payload: any) => {
  return {
    type: TRIGGER_SYNC,
    payload,
  };
};
