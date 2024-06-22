import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
// import AdminView from './components/AdminView';
import ProductList from './components/ProductList';
// import ProductDetails from './components/ProductDetails';
// import Cart from './components/Cart';
import React from 'react';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/admin" component={AdminView} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products" component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Redirect from="/" to="/products" />
      </Routes>
    </Router>
  )
}

export default App
