import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { CREATE_POST_REQUEST, GET_POSTS_REQUEST } from './types';
import axios from 'axios';
import { getPostsFailure, getPostsSuccess } from './actions';
import { PostsQuery } from '../../Apis/Database/Queries/posts.query';
import { SyncQueueService } from '../../Apis/Service/syncQueue.service';
import { SyncQueueRegisteredEntitiesNames } from '../../Apis/Sync/syncQueueRegistredEntities';
import { POSTS_KEY } from '../../Apis/Database/Schemas/posts.schema';
import { v4 as uuid } from 'uuid';

function* handlePostsRequests(): any {
  try {
    const posts = yield call(
      axios.get,
      'https://digimon-api.vercel.app/api/digimon'
    );
    yield put(getPostsSuccess(posts.data));
  } catch (error) {
    yield put(getPostsFailure());
  }
}

function* createPostRequest({ payload }: any) {
  try {
    const formattedData = { ID: uuid(), ...payload };
    PostsQuery.create(formattedData);
    SyncQueueService().enqueue({
      entity: SyncQueueRegisteredEntitiesNames.Posts,
      data: formattedData,
      key: formattedData.ID,
      userID: uuid(),
    });
  } catch (error) {}
}

export default all([
  takeEvery(GET_POSTS_REQUEST, handlePostsRequests),
  takeEvery(CREATE_POST_REQUEST, createPostRequest),
]);
