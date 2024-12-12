import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home/Home';
import Wish from '../pages/wish/Wish';
import Cart from '../pages/cart/Cart';

const Router = () => {
  return (
   <BrowserRouter>
   <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/wish" element={<Wish/>}/>
<Route path="/cart" element={<Cart/>}/>
   </Routes> 
   </BrowserRouter>
  )
}

export default Router