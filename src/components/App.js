import { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopNav from "../binding/TopNav";
import Products from "../binding/Products";
import Home from "../pages/Home";

import "../styles.css";

export default function App({fetchCartItems}) {

  useEffect(() => {
    fetchCartItems()
  },[fetchCartItems])
  return (
    <Router>
       <div className="App">
        <TopNav />

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products/" element={<Products />} />
        </Routes>
      </div>
    </Router>
   
  );
}
