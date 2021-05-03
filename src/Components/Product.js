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

export const checkItem = (array, id) => {
  return array.find((item) => item.id === id);
};

export function Product() {
  const { productState } = useProduct();
  const { cartItems, wishlist, prodData, dataDispatch } = useData();

  function getSortedData(productList, sortBy) {
    if (sortBy === "Price-low-high") {
      return productList.sort((a, b) => a["price"] - b["price"]);
    }
    if (sortBy === "Price-high-low") {
      return productList.sort((a, b) => b["price"] - a["price"]);
    }

    return productList;
  }

  function getFilteredData(
    productList,
    showFastDeliveryOnly,
    showInventoryAll
  ) {
    return productList
      .filter(({ fastDelivery }) =>
        showFastDeliveryOnly ? fastDelivery : true
      )
      .filter(({ inStock }) => (showInventoryAll ? true : inStock));
  }

  const sortedData = getSortedData(prodData, productState.sortBy);
  const filteredList = getFilteredData(
    sortedData,
    productState.showFastDeliveryOnly,
    productState.showInventoryAll
  );

  return (
    <div className="main-section" >
    <Filter/>
    <div className="container horizontal-card center wrap">
        {filteredList.map(
          ({
            id,
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
              key={id}
              className="card product center vertical-card md-width-card  relative-box "
            >
              <button
                className=" top-right dismiss-btn center curve"
                style={{
                  color: `${checkItem(wishlist, id) ? "red" : "white"}`
                }}
                onClick={() => {
                  checkItem(wishlist, id)
                    ? dataDispatch({
                        type: REMOVE_FROM_WISHLIST,
                        id
                      })
                    : dataDispatch({
                        type: ADD_TO_WISHLIST,
                        item: {
                          id,
                          name,
                          price,
                          inStock,
                          rating,
                          fastDelivery,
                          image,
                          offer,
                          qty: 1
                        }
                      });
                }}
              >
                <i className="fa fa-heart"></i>
              </button>
              <div className="img center" >
                <img  src={image} width="100%" height="100%" alt={productName} />
              </div>
              <div>
                <h3 className="product-name"> {name} </h3>
                <div>Rs. {price}</div>
                {inStock && <div> In Stock </div>}
                {!inStock && <div> Out of Stock </div>}
                <div>
                  rating {rating} <i class="far fa-star"></i>
                </div>
                {fastDelivery ? (
                  <div> Fast Delivery </div>
                ) : (
                  <div> 3 days minimum </div>
                )}
                <div>{offer}</div>
              </div>

              <div className="horizontal-card wrap center">
                <Link
                  to={checkItem(cartItems, id) ? "/cart" : "/"}
                  className="btn md-btn primary-btn"
                  onClick={() => {
                    if (!checkItem(cartItems, id)) {
                      
                      dataDispatch({
                        type: ADD_TO_CART,
                        item: {
                          id,
                          name,
                          price,
                          inStock,
                          rating,
                          fastDelivery,
                          image,
                          qty: 1
                        }
                      });
                    }
                  }}
                >
                  {checkItem(cartItems, id) ? "Go to Cart" : "Add to cart"}
                </Link>
                {/* <button className="btn primary-btn md-btn">Buy now</button> */}
              </div>

              {!inStock?
              <div className="out-of-stock center curve absolute-box"> 
                <div className="md-txt out-of-stock_text curve"> out of stock </div>
              </div>:<div></div>}
            </div>
          )
        )}
      </div>
      
    </div>
  );
}
