export const loadDataRequest = () => {
    return {
      type: 'LOAD_DATA_REQUEST'
    };
  };
  
  export const loadDataSuccess = (data) => {
    return {
      type: 'LOAD_DATA_SUCCESS',
      payload: data
    };
  };
  
  export const loadDataFailure = (error) => {
    return {
      type: 'LOAD_DATA_FAILURE',
      payload: error
    };
  };
  
  // Thunk를 사용하여 비동기 데이터 로딩 액션 생성자
  export const fetchData = () => {
    return (dispatch) => {
      dispatch(loadDataRequest());
      return fetch('/some-api')
        .then(response => response.json())
        .then(data => dispatch(loadDataSuccess(data)))
        .catch(error => dispatch(loadDataFailure(error)));
    };
  };