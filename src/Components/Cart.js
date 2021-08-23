import { useData } from "../Context/DataContext";
import { ProductDescription } from "./ProductDescription";

const getTotalAmount = (item) => {
  console.log(item)
  return item?.reduce((total, { product,quantity }) => total + product.price * quantity, 0);
};
const getTotalQuantity= (item) => {
  console.log(item)
  return item?.reduce((total, { quantity }) => total + quantity, 0);
};

export  function Cart() {
  const { state:{cartItems,  cartQuantity},placeOrder} = useData();
  
  console.log(cartQuantity);
  if (cartQuantity === 0) {
    return (
      <div className="center grey-text main-section">
        <h1>The cart is empty</h1>
      </div>
    );
  } else {
    return (
      <div className="vertical-card cart-section curve">
        <u>
        <p className="center lg-txt curve">Shopping Cart</p>
        </u>
        <section className="cart-total-section curve  center">
            <p className="center md-txt">Total price:<b>₹{getTotalAmount(cartItems.products)}</b> </p >
            <p className="center md-txt">Total quantity:<b>{getTotalQuantity(cartItems.products)}</b> </p >
            <button onClick={()=>placeOrder()} className="btn primary-btn md-btn mr1">Place order</button>
        </section>
        <div className=" cart-main-section center curve"> 

          {/* <div className="center lg-txt">Total: {getTotalAmount(cartItems.products)} </div> */}

          <div className="vertical-card center wrap">
            {cartItems?.products?.map(
              (item) => (
                <ProductDescription key={item._id} products={item}/>
              )
            )}
          </div>
          {/* <div className="cart-side-section curve shadow">
            <p className="center md-txt">Total price:<b>₹{getTotalAmount(cartItems.products)}</b> </p >
          </div> */}
        </div>
      </div>
    );
  }
}
