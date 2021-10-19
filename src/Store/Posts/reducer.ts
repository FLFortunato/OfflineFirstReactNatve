import produce from 'immer';
import {GET_POSTS_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS} from './types';

const INITIAL_STATE = {
  results: [],
  loading: false,
};

const reducer = (state: any = INITIAL_STATE, {type, payload}: any) => {
  return produce(state, (draft: any) => {
    switch (type) {
      case GET_POSTS_REQUEST:
        draft.results = [];
        draft.loading = true;
        break;
      case GET_POSTS_SUCCESS:
        draft.results = payload;
        draft.loading = false;
        break;
      case GET_POSTS_FAILURE:
        draft.loading = false;
        break;
      default:
        break;
    }
  });
};

export default reducer;
