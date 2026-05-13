import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.scss';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
}
