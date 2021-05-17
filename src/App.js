import './App.css';

import {Navigation }from "./Components/Navigation"
import { Route, Routes } from 'react-router';
import { Product } from './Components/Product';
import { Cart } from './Components/Cart';
import { Wishlist } from './Components/Wishlist';
import { CartUpdatedToast } from "./Components/Toasts/Toasts";
import { useState ,useEffect } from 'react';
function App() {
  const [showToast,setShowToast] = useState(false)

  useEffect(()=>{
    const interval=setTimeout(()=>{
      setShowToast(false)
    },2000)
    return () => {
      clearTimeout(interval);
  }
  },[showToast])
  return (
    <div className="App">
      <Navigation/>
      {showToast && <CartUpdatedToast/>}
      <Routes>
        <Route path="/" element={<Product showToast={showToast} setShowToast={setShowToast} />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<Wishlist/>} />

      </Routes>
    </div>

   
  );
}

export default App;
