import { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopNav from "../binding/TopNav";
import Products from "../binding/Products";
import Home from "../binding/Home";
import Cart from "../binding/Cart";

import "../styles.css";

export default function App({fetchCartItems, fetchProducts}) {

  useEffect(() => {
    fetchCartItems()
  },[fetchCartItems])

  useEffect(() => {
    fetchProducts()
  },[fetchProducts])

  return (
    <Router>
       <div className="App">
        <TopNav />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products/" element={<Products />} />
          <Route path="/cart/" element={<Cart />} />
        </Routes>
      </div>
    </Router>
   
  );
}
