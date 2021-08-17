import { useData } from "../Context/DataContext";
import { getTotalItem } from "../Components/Navigation";
import { Link } from "react-router-dom";
import { checkItemInCart } from "../utils/checkItem";

export  function Wishlist() {
  const { state:{cartItems, wishlist,user},addToCart,removeFromWishlist } = useData();
  const userId=user._id

  if (getTotalItem(wishlist?.products) === 0) {
    return (
      <div className="center grey-text main-section" >
        <h1>The wishlist is empty</h1>
      </div>
    );
  } else {
    return (
      <div
        className="horizontal-card center wrap main-section"
        
      >
        {wishlist?.products?.map(
          ({
            _id,
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
              key={_id}
              className="card horizontal-card lg-width-card  relative-box shadow"
            >
              <button
                className="top-right dismiss-btn  "
                onClick={() =>
                  removeFromWishlist(userId,_id)
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
                  to={checkItemInCart(cartItems, _id).length>0 ? "/cart" : "/wishlist"}
                  className="btn md-btn primary-btn"
                  onClick={() => {
                    if (checkItemInCart(cartItems, _id)?.length===0||checkItemInCart(cartItems, _id)===false) {
                      
                      addToCart(userId,_id);
                    }
                  }}
                >
                  {checkItemInCart(cartItems, _id).length>0 ? "Go to Cart" : "Add to cart"}
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
