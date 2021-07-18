import { checkItem } from "../utils/checkItem";
import {  ADD_TO_CART,  ADD_TO_WISHLIST,  REMOVE_FROM_WISHLIST} from "../Reducer/DataReducer";
import { useData } from "../Context/DataContext";
import { Link } from "react-router-dom";

export const Card =({item:{_id,
    name,
    image,
    price,
    productName,
    inStock,
    rating,
    fastDelivery,
    offer},showToast,setShowToast})=>{
  const { state:{cartItems, wishlist},dataDispatch } = useData();
// console.log(key)
// console.log(key)
    return(
        <div    className="card product center  md-width-card  relative-box ">
                <button 
                    className=" top-right wishlist-btn center curve"
                    style={{
                        color: `${checkItem(wishlist, _id) ? "red" : "black"}`
                    }}
                    onClick={() => {
                        checkItem(wishlist, _id)
                        ? dataDispatch({
                            type: REMOVE_FROM_WISHLIST,
                            id:_id
                            })
                        : setTimeout(
                            ()=>{ dataDispatch({
                            type: ADD_TO_WISHLIST,
                            item: {
                                _id,
                                name,
                                price,
                                inStock,
                                rating,
                                fastDelivery,
                                image,
                                offer,
                                qty: 1
                            }
                            });},1000)
                    }}
                >
                  <i className="fa fa-heart"></i>
                </button>
                <div className="img center" >
                  <img  src={image} width="100%" height="100%" alt={productName} />
                </div>
                <div>
                  <h3 className="product-name"> {name} </h3>
                  <div className="product-details center">
                      <div className="md-txt">Rs. {price}</div>
                      <div className="rating center curve">
                      {rating}
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="rating-icon" viewBox="0 0 32 32"> <title>star-full</title>
                                <path
                                    d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z">
                                </path>
                        </svg>
                      </div>
                      {/* <div>{offer}</div> */}
                  </div>
                  <div className="horizontal-card wrap center">
                  <Link
                    to={checkItem(cartItems, _id) ? "/cart" : "/"}
                    className="btn add-to-cart-btn md-btn primary-btn"
                    onClick={() => {
                      if (!checkItem(cartItems, _id)) {
                        setTimeout(() => {
                          setShowToast(!showToast)
                          dataDispatch({
                            type: ADD_TO_CART,
                            item: {
                              _id,
                              name,
                              price,
                              inStock,
                              rating,
                              fastDelivery,
                              image,
                              qty: 1
                            }
                          });
                        }, 1000);
                        
                      }
                    }}
                  >
                    {checkItem(cartItems, _id) ? "Go to Cart" : "Add to cart"}
                  </Link>
                </div>
                </div>

               

                {!inStock?
                <div className="out-of-stock center curve absolute-box"> 
                  <div className="md-txt out-of-stock_text curve"> out of stock </div>
                </div>:<div></div>}
              </div>
    )
}