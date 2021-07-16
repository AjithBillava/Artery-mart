// import { productDB as prodData } from "../Database/ProductDB";

export const INCREEMENT_CART = "INCREEMENT_CART";
export const DECREEMENT_CART = "DECREEMENT_CART";
export const REMOVE_CART = "REMOVE_CART";
export const ADD_TO_CART = "ADD_TO_CART";

export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";

export const data = {
  prodData:[],
  cartItems: [],
  wishlist: [],
  cartQuantity: 0,
  user:{},
  isAuthenticated: false
};

export const dataReducer = (state, { type, id, item, payLoad }) => {
  const { cartItems, wishlist, cartQuantity } = state;
  // console.log(cartItems, cartQuantity);

  switch (type) {
    case "SET_PRODUCT":
        return{
          ...state,prodData:payLoad
        }
    case INCREEMENT_CART:
      return {
        ...state,
        cartItems: cartItems.map((item) => {
          console.log(item);
          return item._id === id ? { ...item, qty: item.qty + 1 } : item;
        })
      };

    case DECREEMENT_CART:
      return {
        ...state,
        cartItems: cartItems.map((item) => {
          return item._id === id ? { ...item, qty: item.qty - 1 } : item;
        })
      };
    case REMOVE_CART:
      return {
        ...state,
        cartItems: cartItems.filter((item) => item._id !== id),
        cartQuantity: cartQuantity - 1
      };
    case ADD_TO_CART:
      console.log({ state });
      return {
        ...state,
        cartItems: cartItems.concat(item),
        cartQuantity: cartQuantity + 1
      };

    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: wishlist.concat(item)
      };

    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: wishlist.filter((item) => item._id !== id)
      };
    case "SEARCH":
      console.log(payLoad)
      // if(payLoad.length===0)
      // {
      //   return(
      //   <div>no such products</div>

      //   )
      // }
      return{
        ...state, prodData:payLoad
        }

    default:
      console.log("Error");
      return state;
  }
};
