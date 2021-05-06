import { useEffect } from "react";
import { useData } from "../Context/DataContext";
import { INCREEMENT_CART, DECREEMENT_CART, REMOVE_CART } from "../Reducer/DataReducer";

const getTotalAmount = (item) => {
  return item.reduce((total, { price, qty }) => total + price * qty, 0);
};

export  function Cart() {
  const { cartItems, dataDispatch, cartQuantity } = useData();

  useEffect(() => {
    console.log({ cartItems, cartQuantity });
  });

  console.log(cartQuantity);
  if (cartQuantity === 0) {
    return (
      <div className="center grey-text main-section">
        <h1>The cart is empty</h1>
      </div>
    );
  } else {
    return (
      <div className="vertical-card main-section">
        <h1 className="center">Cart</h1>

        <h1 className="center">Total: {getTotalAmount(cartItems)} </h1>

        <div className="horizontal-card center wrap">
          {cartItems.map(
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
                  onClick={() => dataDispatch({ type: REMOVE_CART, id: id })}
                >
                  x
                </button>

                <div style={{ height: "280px", width: "200px" }}>
                <img src={image} width="100%" height="100%" alt={productName} />
              </div>
                <div>
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
                  <button
                    className="btn primary-btn md-btn mr1"
                    onClick={() =>
                      qty !== 0
                        ? dataDispatch({
                            type: DECREEMENT_CART,
                            id: id
                          })
                        : "dataDispatch({ type: REMOVE_CART, id: id })"
                    }
                  >
                    -
                  </button>

                  {qty === 0 ? 0 : <div className="justify-center">{qty}</div>}
                  <button
                    className="btn primary-btn md-btn mr1"
                    onClick={() =>
                      dataDispatch({
                        type: INCREEMENT_CART,
                        id: id
                      })
                    }
                  >
                    +
                  </button>
                  <button className="btn primary-btn md-btn mr1">Buy now</button>
                </div>
                </div>
                
              </div>
            )
          )}
        </div>
      </div>
    );
  }
}
