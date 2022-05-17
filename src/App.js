import { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopNav from "./components/TopNav";
import Products from "./binding/Products";
import Home from "./pages/Home";

import "./styles.css";

export default function App() {

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
