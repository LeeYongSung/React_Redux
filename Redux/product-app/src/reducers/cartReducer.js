import { ADD_TO_CART, REMOVE_FROM_CART, ADJUST_QUANTITY } from '../actions/cartActions';

const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // 상품을 카트에 추가
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVE_FROM_CART:
      // 상품을 카트에서 제거
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
    case ADJUST_QUANTITY:
      // 상품의 수량을 조정
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        )
      };
    default:
      return state;
  }
};

export default cartReducer;
