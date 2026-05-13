import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.scss';
import { CartProvider } from './context/CartContext';
import ScrollToTop from './components/ScrollToTop';
import CartSidebar from './components/CartSidebar/CartSidebar';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <CartSidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
