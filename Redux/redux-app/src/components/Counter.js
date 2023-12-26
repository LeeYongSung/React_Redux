import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    console.log('증가')
    dispatch(increment());
};

const handleDecrement = () => {
      console.log('감소')
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => handleDecrement()}>감소</button>
      <button onClick={() => handleIncrement()}>증가</button>
    </div>
  );
};

export default Counter;
