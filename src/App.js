import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Comp/LoginPage';
import AllProductsPage from './Comp/AllProducts';
import ProductDetailPage from './Comp/ProductDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />

        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
