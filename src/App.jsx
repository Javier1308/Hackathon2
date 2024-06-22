import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Log';
import RegisterPage from './pages/register';
// import AdminView from './components/AdminView';
import ProductList from './components/ProductList';
// import ProductDetails from './components/ProductDetails';
// import Cart from './components/Cart';
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/register" component={RegisterPage} />
        {/* <Route path="/admin" component={AdminView} /> */}
        {/* <Route path="/products/:id" component={ProductDetails} /> */}
        <Route path="/products" component={ProductList} />
        {/* <Route path="/cart" component={Cart} /> */}
        <Route path="*" component={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
