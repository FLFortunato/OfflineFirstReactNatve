import { DefaultRootState } from 'react-redux';
import PostsReducer from '../Store/Posts/reducer';
import UserReducer from '../Store/User/reducer';
import SyncReducer from '../Store/Sync/reducer';
import { PostsState } from '../Store/Posts/types';
import { UsersState } from '../Store/User/types';
import { SyncStatusState } from '../Store/Sync/types';

declare global {
  interface ReduxState extends DefaultRootState {
    PostsState: PostsState;
    UsersState: UsersState;
    SyncStatusState: SyncStatusState;
  }
}

export const reducersToCombine = {
  PostsState: PostsReducer,
  UsersState: UserReducer,
  SyncStatusState: SyncReducer,
};
