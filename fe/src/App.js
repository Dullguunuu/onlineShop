import './App.css';
import { Routes, Route } from 'react-router-dom'
import AdminLayout from './pages/AdminLayout';
import Dashboard from './pages/Dashboard';
import Menus from './pages/Menus';
import Categories from './pages/Categories';
import Brands from './pages/Brands';
import Products from './pages/Products';
import AdminUsers from './pages/AdminUsers';
import Orders from './pages/Orders';
import Sellers from './pages/Sellers';
import Customers from './pages/Customers';

function App() {
  return (
    <div>
      <Routes></Routes>
      <Routes>
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="menus" element={<Menus />} />
          <Route path="categories" element={<Categories />} />
          <Route path="brands" element={<Brands />} />
          <Route path="products" element={<Products />} />
          <Route path="customers" element={<Customers />} />
          <Route path="admin-users" element={<AdminUsers />} />
          <Route path="orders" element={<Orders />} />
          <Route path="sellers" element={<Sellers />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
