import React from "react";
import '../src/components/styles/App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import SingleProduct from './components/SingleProduct/SingleProduct'

import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";
import AppProvider from "./components/utils/ContextApp";
import SingleCategory from "./components/SingleCategory/SingleCategory";


const App = () => {
  return (
    <>
    <AppProvider>
    
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/category/:id" element={<SingleCategory/>} />
            <Route
              exact
              path="/product/:id"
              element={<SingleProduct/>}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
        </AppProvider>
    </>
  );
};

export default App;
