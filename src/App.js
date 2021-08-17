import './App.css';

import {Navigation }from "./Components/Navigation"
import { Route, Routes } from 'react-router';
import { Product } from './Components/Product';
import { Cart } from './Components/Cart';
import { Wishlist } from './Components/Wishlist';
import { CartUpdatedToast } from "./Components/Toasts/Toasts";
import { useState ,useEffect } from 'react';
import { Login } from './Components/login';
import { PrivateRoute } from './Components/private route/PrivateRoute';
import { Register } from './Components/register';
import { useData } from './Context/DataContext';
import { Loader } from './Components/loader';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [showToast,setShowToast] = useState(false)
  const {loadData,loadUser,state} = useData()
  useEffect(()=>{
    const interval=setTimeout(()=>{
      setShowToast(false)
    },2000)
    return () => {
      clearTimeout(interval);
  }
  },[showToast])

  useEffect(() => {
		let isMounted = true;
		if (isMounted) {
      loadData()
			loadUser()
		}
		return () => {
			isMounted = false;
		};
	}, []);

  toast.configure()
  return (
    <div className="App">
      <Navigation/>
      {showToast && <CartUpdatedToast/>}
      {state.isLoading && <Loader/>}
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Product showToast={showToast} setShowToast={setShowToast} />} />
        <PrivateRoute path="/cart" element={<Cart/>} />
        <PrivateRoute path="/wishlist" element={<Wishlist/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>

   
  );
}

export default App;
