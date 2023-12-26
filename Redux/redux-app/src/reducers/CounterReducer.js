import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  value: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + action.payload };
    case DECREMENT:
      return { ...state, value: state.value - action.payload };
    default:
      return state;
  }
}

export default counterReducer;
