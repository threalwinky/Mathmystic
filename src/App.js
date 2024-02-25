import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { translate, Trans, withTranslation } from 'react-i18next';

import { NavBar } from './components';
import { Home, SignIn, SignUp, Product, UpdateProduct, Cart, Forum, Profile, Study } from './routes'
import './App.css'
import Test from './routes/test/Test';
import { Modal, NotFound } from './containers';
import Purchase from './routes/purchase/Purchase';
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/modal" element={<Modal/>} />
          <Route path="/signin" element={<SignIn/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="product/:id" element={<Product />} />
          <Route path="up" element={<UpdateProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="forum/:id" element={<Forum />} />
          <Route path="profile" element={<Profile />} />
          <Route path="study" element={<Study />} />
        </Routes>
        
      </BrowserRouter>

    </div>
  )
}

export default withTranslation("translations")(App);