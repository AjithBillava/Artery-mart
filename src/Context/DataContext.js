import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { data, dataReducer } from "../Reducer/DataReducer";

const {REACT_APP_BACKEND_URL} = process.env


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
      return dataDispatch({type:"SET_LOADING",payLoad:false})

    }catch(error){
      console.log(error.response)
    }
  }

  return (
    <DataContext.Provider
      value={{
       state,
        loadData,
        dataDispatch
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
