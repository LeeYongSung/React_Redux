import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  // 임시 상품 데이터
  const productsData = [
    { id: 1, title: '상품 1', price: 10000, quantity: 1 },
    { id: 2, title: '상품 2', price: 20000, quantity: 1 },
    { id: 3, title: '상품 3', price: 30000, quantity: 1 }
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList products={productsData} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
