import logo from './logo.svg';
import './App.css';

import {Navigation }from "./Components/Navigation"
import { Route, Routes } from 'react-router';
import { Product } from './Components/Product';
import { Cart } from './Components/Cart';
import { Wishlist } from './Components/Wishlist';
function App() {
  return (
    <div className="App">
      <Navigation/>
      
      <Routes>
        <Route path="/" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<Wishlist/>} />

      </Routes>
    </div>

   
  );
}

export default App;
