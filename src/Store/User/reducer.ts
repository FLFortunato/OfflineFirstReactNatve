import produce from 'immer';
import {
  CREATE_USER_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
} from './types';

const INITIAL_STATE = {
  result: [],
  loading: false,
  isLogged: false,
  isLogging: false,
};

const reducer = (state = INITIAL_STATE, { type, payload }: any) => {
  return produce(state, (draft) => {
    switch (type) {
      case CREATE_USER_REQUEST:
        draft.loading = true;
        break;
      case CREATE_USER_SUCCESS:
        draft.loading = false;
        draft.result = payload || [];
        break;
      case CREATE_USER_FAILURE:
        draft.loading = false;
        draft.result = [];
        break;
      case LOGIN_USER_REQUEST:
        draft.isLogging = true;
        break;
      case LOGIN_USER_SUCCESS:
        draft.isLogged = payload;
        break;
      case LOGIN_USER_FAILURE:
        draft.isLogging = false;
        break;
      default:
        break;
    }
  });
};

export default reducer;
