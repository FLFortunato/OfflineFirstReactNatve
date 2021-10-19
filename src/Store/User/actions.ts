import {
  CREATE_USER_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_REQUEST,
} from './types';

export const createUserRequest = (payload: any) => {
  return {
    type: CREATE_USER_REQUEST,
    payload,
  };
};

export const createUserSuccess = (payload: any) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload,
  };
};

export const createUserFailure = () => {
  return {
    type: CREATE_USER_FAILURE,
  };
};

export const loginUserRequest = (payload: any) => {
  return {
    type: LOGIN_USER_REQUEST,
    payload,
  };
};

export const loginUserSuccess = (payload: any) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload,
  };
};

export const loginUserFailure = () => {
  return {
    type: LOGIN_USER_FAILURE,
  };
};

export const logoutUserRequest = (payload: any) => {
  return {
    type: LOGOUT_USER_REQUEST,
    payload,
  };
};
