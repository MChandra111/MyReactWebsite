import React, { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Blogs from "./pages/Blogs.jsx";
import "./App.css";

function App() {
  // React States

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>         
          <Route path="/" element={<Layout />}>           
          <Route index element={<Home />} />           
          <Route path="blogs" element={<Blogs />} />           
          <Route path="about" element={<About />} />           
          </Route>       
        </Routes>     
      </BrowserRouter>   
    </div>
  );

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App