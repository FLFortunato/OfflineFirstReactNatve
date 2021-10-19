import { all, put, takeLatest } from 'redux-saga/effects';
import { UserService } from '../../Services/UserService/user.service';
import { deleteItem, setItem } from '../../Shared/Utils/AsyncStorageFunctions';
import {
  createUserFailure,
  createUserSuccess,
  loginUserFailure,
  loginUserSuccess,
} from './actions';
import {
  CREATE_USER_REQUEST,
  LOGIN_USER_REQUEST,
  LOGOUT_USER_REQUEST,
} from './types';

export function* createUser({ payload }: any): any {
  try {
    const { status } = yield UserService().post(payload);

    yield put(createUserSuccess(status));
  } catch (error) {
    yield put(createUserFailure());
  }
}

export function* loginUser({ payload }: any): any {
  try {
    const {
      data: { access_token },
    } = yield UserService().logIn(payload);

    setItem('@token', access_token);
    yield put(loginUserSuccess(true));
  } catch (error) {
    yield put(loginUserFailure());
  }
}

export function* logOutUser({ payload }: any): any {
  try {
    yield UserService().logOut({ token: payload });
    deleteItem('@token');
    yield put(loginUserSuccess(false));
  } catch (error) {
    yield put(loginUserFailure());
  }
}

export default all([
  takeLatest(CREATE_USER_REQUEST, createUser),
  takeLatest(LOGIN_USER_REQUEST, loginUser),
  takeLatest(LOGOUT_USER_REQUEST, logOutUser),
]);
