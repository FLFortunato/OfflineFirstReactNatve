import {applyMiddleware, combineReducers, createStore} from '@reduxjs/toolkit';
import createSagaMiddleWare from 'redux-saga';
import {reducersToCombine} from './reducers';
import Sagas from './sagas';

const reducers = combineReducers(reducersToCombine);

const sagaMiddleWare = createSagaMiddleWare();

const AppStore = () => {
  const store = createStore(reducers, applyMiddleware(sagaMiddleWare));

  sagaMiddleWare.run(Sagas);

  return store;
};

export default AppStore();
