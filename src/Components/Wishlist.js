import { useData } from "../Context/DataContext";
import { ADD_TO_CART, REMOVE_FROM_WISHLIST } from "../Reducer/DataReducer";
import { checkItem } from "../Components/Product";
import { getTotalItem } from "../Components/Navigation";
import { Link } from "react-router-dom";

export  function Wishlist() {
  const { cartItems, wishlist, dataDispatch } = useData();

  if (getTotalItem(wishlist) === 0) {
    return (
      <div className="center grey-text" style={{ marginTop: "6.5rem" }}>
        <h1>The wishlist is empty</h1>
      </div>
    );
  } else {
    return (
      <div
        className="horizontal-card center wrap "
        style={{ marginTop: "6.5rem" }}
      >
        {wishlist.map(
          ({
            id,
            name,
            image,
            price,
            productName,
            inStock,
            rating,
            fastDelivery,
            qty
          }) => (
            <div
              key={id}
              className="card horizontal-card lg-width-card  relative-box shadow"
            >
              <button
                className="top-right dismiss-btn  "
                onClick={() =>
                  dataDispatch({ type: REMOVE_FROM_WISHLIST, id: id })
                }
              >
                x
              </button>

              <div style={{ height: "280px", width: "200px" }}>
                <img src={image} width="100%" height="100%" alt={productName} />
              </div>
              <div className="vertical-card space-between ">
                <div className="pd2">
                <h3> {name} </h3>
                <div>Rs. {price}</div>
                {inStock && <div> In Stock </div>}
                {!inStock && <div> Out of Stock </div>}
                <div>rating {rating}</div>
                {fastDelivery ? (
                  <div> Fast Delivery </div>
                ) : (
                  <div> 3 days minimum </div>
                )}
                </div>
                <div className="horizontal-card center">
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
                </div>
              </div>
            </div>
          )
        )}
      </div>
    );
  }
};
