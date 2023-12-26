export const loadData = () => {
    return { type: 'LOAD_DATA' };
  };
  
  // saga.js
  import { call, put, takeLatest } from 'redux-saga/effects';
  
  // API 요청을 처리하는 함수
  const getApiData = () => fetch('/some-api').then(response => response.json());
  
  // Saga Worker
  function* fetchDataSaga() {
    try {
      const data = yield call(getApiData);
      yield put({ type: 'LOAD_DATA_SUCCESS', payload: data });
    } catch (error) {
      yield put({ type: 'LOAD_DATA_FAILURE', payload: error.message });
    }
  }
  
  // Saga Watcher
  export function* watchFetchData() {
    yield takeLatest('LOAD_DATA', fetchDataSaga);
  }