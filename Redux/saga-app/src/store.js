// store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import dataReducer from './reducer';
import { watchFetchData } from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  dataReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchFetchData);

export default store;