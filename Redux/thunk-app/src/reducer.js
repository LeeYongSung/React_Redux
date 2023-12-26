const initialState = {
    loading: false,
    data: null,
    error: null
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOAD_DATA_REQUEST':
        return { ...state, loading: true, error: null };
      case 'LOAD_DATA_SUCCESS':
        return { ...state, loading: false, data: action.payload };
      case 'LOAD_DATA_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default dataReducer;