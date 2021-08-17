import { useData } from "../Context/DataContext";
import { ProductDescription } from "./ProductDescription";

const getTotalAmount = (item) => {
  console.log(item)
  return item?.reduce((total, { product,quantity }) => total + product.price * quantity, 0);
};

export  function Cart() {
  const { state:{cartItems,  cartQuantity}} = useData();
  
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

        <h1 className="center">Total: {getTotalAmount(cartItems.products)} </h1>

        <div className="vertical-card center wrap">
          {cartItems?.products?.map(
            (item) => (
              <ProductDescription key={item._id} products={item}/>
            )
          )}
        </div>
      </div>
    );
  }
}
