// import "../App.css";
import { useProduct } from "../Context/ProductContext";
import { useData } from "../Context/DataContext";
import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST
} from "../Reducer/DataReducer";
import { Link } from "react-router-dom";
import { Filter } from "./Filter";
import { useAxios } from "../Server/server.request";
import { useEffect} from "react";
import {getSearchedData} from "./Navigation"
import { getSortedData } from "../utils/getSortedData";
import { getFilteredData } from "../utils/getFilteredData";
import { checkItem } from "../utils/checkItem";



export function Product({showToast,setShowToast}) {
  const { productState } = useProduct();
  const { cartItems, wishlist, dataDispatch , prodData} = useData();

  const prodLocal=JSON.parse(localStorage.getItem("products"))
  // console.log(prodLocal)
  const prodServer = useAxios()
  // const productData = prodLocal?prodLocal:prodServer

  useEffect(()=>{
    // const prodLocal=JSON.parse(localStorage.getItem("products"))

    dataDispatch({type:"SET_PRODUCT",payLoad:prodServer})
  },[dataDispatch,prodServer])
  
  // useEffect(()=>{
  //   dataDispatch({type:"SET_PRODUCT",payLoad:prodLocal?prodLocal :prodServer})
  // },[dataDispatch,prodServer,prodLocal])

  const sortedData = getSortedData(prodData, productState.sortBy);
  const filteredList = getFilteredData(
    sortedData,
    productState.showFastDeliveryOnly,
    productState.showInventoryAll
  );

  return (
    <div className="main-section " >
    <Filter/>
    <div className="vertical-card wrap container center relative-box">
      {/* <div className="center"> */}
      
        <div className="center desktop-view-search-bar search-bar absolute-box">
                          < i className=" center pd1-r" style={{height:"2rem",width:"2rem",cursor:"pointer"}}>               
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" fill="black" viewBox="0 0 100 125" enable-background="new 0 0 100 100"><path d="M87,81.3L69.1,63.4c9-11.7,8.1-28.6-2.7-39.3c-5.9-5.9-13.5-8.8-21.2-8.8s-15.3,2.9-21.2,8.8c-11.7,11.7-11.7,30.7,0,42.4  c5.9,5.9,13.5,8.8,21.2,8.8c6.4,0,12.8-2,18.1-6.1L81.3,87c0.8,0.8,1.8,1.2,2.9,1.2c1,0,2.1-0.4,2.9-1.2  C88.6,85.5,88.6,82.9,87,81.3z M45.3,67.2c-5.9,0-11.3-2.3-15.5-6.4c-8.5-8.5-8.5-22.4,0-31c4.1-4.1,9.6-6.4,15.5-6.4  s11.3,2.3,15.5,6.4s6.4,9.6,6.4,15.5c0,5.9-2.3,11.3-6.4,15.5S51.1,67.2,45.3,67.2z"></path></svg>
                          </i>
                          <input className="search"
                          placeholder="search products here..."
                          onChange={(e) =>
                            dataDispatch({ type: "SEARCH", 
                            payLoad: getSearchedData(prodLocal?prodLocal:prodServer,e.target.value) })
                            
                          }
                          >
                          </input>
                        
                        
                      </div>
        <div className="horizontal-card product-container center wrap">
   
        {prodData?
          (  filteredList.map(
            ({
              _id,
              name,
              image,
              price,
              productName,
              inStock,
              rating,
              fastDelivery,
              offer
            }) => (
              <div
                key={_id}
                className="card product center  md-width-card  relative-box "
              >
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
          )):(
            <h1>loading</h1>
          )
        }
      </div>
      {/* </div> */}
    </div>
    </div>
  );
}
