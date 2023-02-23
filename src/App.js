import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';

import HomePage from './pages/homepage/HomePage';
import DetailPage from './pages/shop/DetailPage';
import ShopPage from './pages/shop/ShopPage';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/detail/:productId" element={<DetailPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
