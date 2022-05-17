import { useState, useEffect } from "react";
import axios from 'axios';

import TopNav from "./components/TopNav";
import Products from "./binding/Products";
import Home from "./pages/Home";

import "./styles.css";

export default function App() {

  return (
    <div className="App">
      <TopNav />
      <Products />
    </div>
  );
}
