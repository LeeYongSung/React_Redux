import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const cart = useSelector((state) => state.cart.cart);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history('/cart'); // 'Add to Cart' 버튼 클릭 후 카트 페이지로 이동
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>Price: {product.price}원</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

