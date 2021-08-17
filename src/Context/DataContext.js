import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { data, dataReducer } from "../Reducer/DataReducer";
import { toast } from "react-toastify";
const {REACT_APP_BACKEND_URL} = process.env
export const TokenConfig = () => {
	const token = localStorage.getItem("token");

	const config = {
		headers: {
			"Content-type": "application/json",
		},
	};

	if (token) {
		config.headers["Authorization"] = `Bearer ${token}`;
	}

	return config;
};

export const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  const [
    state,
    dataDispatch
  ] = useReducer(dataReducer, data);

  const loadData = async()=>{
    try{
      dataDispatch({type:"SET_LOADING",payLoad:true})
      const {data : productData } = await axios.get(`${REACT_APP_BACKEND_URL}/products`)
      console.log(productData)
      dataDispatch({type:"SET_PRODUCT",payLoad:productData.products})
       dataDispatch({type:"SET_LOADING",payLoad:false})

    }catch(error){
      console.log(error.response)
    }
  }

  const loadUser = async()=>{
    try{
      dataDispatch({type:"SET_LOADING",payLoad:true})
      const {data } = await axios.get(`${REACT_APP_BACKEND_URL}/user`,TokenConfig())
      
      dataDispatch({type:"LOAD_USER",payLoad:data})
      
       dataDispatch({type:"SET_LOADING",payLoad:false})

    }catch(error){
      console.log(error.response)
    }
  }
  const loginUser = async(email,password,state,navigate)=>{
    try{
      const {data } = await axios.post(`${REACT_APP_BACKEND_URL}/user/login`,{email,password})
      
      dataDispatch({type:"LOGIN_USER",payLoad:data})
      console.log(data)
      toast.success("Logged in successfully", {
				autoClose: 2000,
				hideProgressBar: true,
			});
      navigate(state?.from?state.from:"/")

    }catch(error){
      console.log(error.response)
    }
  }
  const logoutUser = ()=>{
    try{
      dataDispatch({type:"LOGOUT_USER"})
    }catch(error){
      console.error(error);
    }
  }
  const registerUser = async(firstname,lastname,email,password,state,navigate)=>{
    try{
      const {data } = await axios.post(`${REACT_APP_BACKEND_URL}/user/register`,{firstname,lastname,email,password})
      console.log(data)
      dataDispatch({type:"REGISTER_USER",payLoad:data})
      navigate(state?.from?state.from:"/")
      toast.success("User Registered Successfully", {
				style: { backgroundColor: "##15b996" },
				autoClose: 2000,
				hideProgressBar: true,
			});
    }catch(error){
      console.log(error.response)
    }
  }

  const addToWishlist = async(userId,product) =>{
      try{
        // console.log(item)
        const {data} = await axios.post(`${REACT_APP_BACKEND_URL}/user/${userId}/wishlist`,{userId,product},TokenConfig())
        console.log(data)
        dataDispatch({type: "ADD_TO_WISHLIST",payLoad:data})
        
      }
      catch(error){
        console.error(error);
      }
    }
  const removeFromWishlist = async(userId,product) =>{
      try{
        const {data} = await axios.post(`${REACT_APP_BACKEND_URL}/user/${userId}/wishlist/remove`,{userId,product},TokenConfig())
        console.log(data)
        dataDispatch({type: "REMOVE_FROM_WISHLIST",payLoad:data})
        
      }
      catch(error){
        console.error(error);
      }
    }
  
  const addToCart = async(userId,product) =>{
    try{
      const {data } = await axios.post(`${REACT_APP_BACKEND_URL}/user/${userId}/cart`,{userId,product},TokenConfig())
      dataDispatch({type:"ADD_TO_CART",payLoad:data})
    }
    catch(error){
      toast.error(error.response.data.message, {
				style: { backgroundColor: "var(--error-color)", letterSpacing: "0.8px" },
				autoClose: 2000,
				hideProgressBar: true,
			});
      console.log(error.response.data.message)

      console.error(error);
    }
  }
  const removeFromCart = async(userId,productId) =>{
    try{
      const {data } = await axios.post(`${REACT_APP_BACKEND_URL}/user/${userId}/cart/remove`,{userId,productId},TokenConfig())
      dataDispatch({type:"REMOVE_CART",payLoad:data})
    }
    catch(error){
      console.error(error);
    }
  }
  const incrementItem = async(productsId,cartId,userId) =>{
    try{
      console.log(productsId)
      // const quantity = state.catr
      const {data}=await axios.post(`${REACT_APP_BACKEND_URL}/user/${userId}/cart/update`,{cartId,productsId,operation:"increment"},
      TokenConfig())
      dataDispatch({type:"INCREMENT_ITEM_OR_DECREMENT_ITEM",payLoad:data})

      console.log(data)
    }
    catch(error){
      console.error(error);
    }
  }
  const decrementItem = async(productsId,cartId,userId) =>{
    try{
      console.log(productsId)
      const {data}=await axios.post(`${REACT_APP_BACKEND_URL}/user/${userId}/cart/update`,{cartId,productsId,operation:"decrement"},
      TokenConfig())
      dataDispatch({type:"INCREMENT_ITEM_OR_DECREMENT_ITEM",payLoad:data})

      console.log(data)
    }
    catch(error){
      console.error(error);
    }
  }

  return (
    <DataContext.Provider
      value={{
        state,
        loadData,
        loadUser,
        loginUser,
        logoutUser,
        registerUser,
        addToWishlist,
        removeFromWishlist,
        addToCart,
        removeFromCart,
        incrementItem,
        decrementItem,
        dataDispatch
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
