import { useState, useEffect } from "react";
import axios from 'axios';

import TopNav from "./components/TopNav";
import Products from "./components/Products";

import "./styles.css";

export default function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9081/products").then(res => 
    setProducts(res.data) );
  },[setProducts]);

  return (
    <div className="App">
      <TopNav />
      <Products products={products}/>
    </div>
  );
}
