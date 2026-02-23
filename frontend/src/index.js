import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import About from './landing_page/about/Aboutpage';
import Product from './landing_page/products/ProductsPage';
import Pricing from './landing_page/pricing/Pricingpage';
import Support from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Notfound from './landing_page/Notfound'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/Signup' element={<Signup />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Product' element={<Product />}></Route>
      <Route path='/Pricing' element={<Pricing />}></Route>
      <Route path='/Support' element={<Support />}></Route>
      <Route path='*' element={<Notfound />}></Route>

    </Routes>
    <Footer />
  </BrowserRouter>
);
