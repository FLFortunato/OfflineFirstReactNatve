import { all } from 'redux-saga/effects';
import postsSaga from '../Store/Posts/sagas';
import syncSaga from '../Store/Sync/sagas';
import authbSaga from '../Store/User/sagas';

export default function* sagas(): any {
  return yield all([postsSaga, syncSaga, authbSaga]);
}
