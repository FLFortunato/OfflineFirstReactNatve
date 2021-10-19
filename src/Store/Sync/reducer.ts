import produce from 'immer';
import { SYNC_LOADING } from './types';

const INITIAL_STATE = {
  loading: false,
  status: { percentage: 0, description: '' },
};

const reducer = (state = INITIAL_STATE, { type, payload }: any) => {
  return produce(state, (draft: any) => {
    switch (type) {
      case SYNC_LOADING:
        draft.loading = payload.loading;
        draft.status = payload.status;
        break;
      default:
        draft = INITIAL_STATE;
        break;
    }
  });
};

export default reducer;
