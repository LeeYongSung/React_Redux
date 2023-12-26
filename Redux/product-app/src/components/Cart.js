// src/components/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, adjustQuantity } from '../actions/cartActions';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();


  // 상품을 카트에서 제거하는 함수
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  // 상품 수량을 조절하는 함수
  const handleAdjustQuantity = (id, quantity) => {
    dispatch(adjustQuantity(id, quantity));
  };

  return (
    <div>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleAdjustQuantity(item.id, item.quantity + 1)}>
              +
            </button>
            <button onClick={() => handleAdjustQuantity(item.id, item.quantity - 1)}>
              -
            </button>
            <button onClick={() => handleRemoveFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
