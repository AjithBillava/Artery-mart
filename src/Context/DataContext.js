import { createContext, useContext, useReducer } from "react";
import { data, dataReducer } from "../Reducer/DataReducer";

export const DataContext = createContext({});
export const DataProvider = ({ children }) => {
  const [
    { cartItems, wishlist, cartQuantity, prodData },
    dispatch
  ] = useReducer(dataReducer, data);

  return (
    <DataContext.Provider
      value={{
        prodData,
        cartItems,
        wishlist,
        cartQuantity,
        dataDispatch: dispatch
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
