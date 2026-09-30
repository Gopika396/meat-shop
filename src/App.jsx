import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import Products from "./components/Products.jsx";

import "./App.css";

function App() {
  return (
    <HashRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products />}
        />

      </Routes>

    </HashRouter>
  );
}

export default App;