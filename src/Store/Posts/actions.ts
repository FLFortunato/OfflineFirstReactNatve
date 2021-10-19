import {
  CREATE_POST_REQUEST,
  GET_POSTS_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
} from './types';

export const getPostsRequest = () => {
  return {
    type: GET_POSTS_REQUEST,
  };
};

export const getPostsSuccess = (payload: any) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload,
  };
};

export const getPostsFailure = () => {
  return {
    type: GET_POSTS_FAILURE,
  };
};

export const createPostRequest = (payload: any) => {
  return {
    type: CREATE_POST_REQUEST,
    payload,
  };
};
