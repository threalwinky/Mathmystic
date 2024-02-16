import React, { useEffect, useState, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { MenuContext } from 'react-flexible-sliding-menu';
import { translate, Trans, withTranslation } from 'react-i18next';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import { Header, Introduction, NavBar, Footer, About, Document, Store, Contact } from './components'
import { PopUp, Loading, NotFound, Chatbot } from './containers'
import { Cart, Home, Product, LogIn, SignUp, Forum, Bill, UpdateProduct } from './routes'
import './App.css'

const App = () => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
  }, [])

  

  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <div>{!loading ? <Loading /> : <Home/>}</div> }/>
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forum" element={<Forum />} />
          <Route path="forum/:id" element={<Forum />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="bill" element={<Bill />} />
          <Route path="updateproduct" element={<UpdateProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer autoClose={5000} />
      </BrowserRouter>
    </div>
  )
}

export default withTranslation("translations")(App);
