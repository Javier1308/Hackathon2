
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import AdminView from './components/AdminView';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css'
import Log from './pages/Log'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/admin" component={AdminView} />
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products" component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Redirect from="/" to="/products" />
      </Switch>
    </Router>
  );
}

export default App;
