import { useData } from "../Context/DataContext"


export const ProductDescription = ({products}) =>{

const {state,incrementItem,decrementItem,removeFromCart} = useData()


const cartId=state.cartItems._id
return(
    <div>
        <div
        key={products.product?._id}
        className="card horizontal-card lg-width-card  relative-box shadow"
        >
        <button
            className="top-right dismiss-btn  "
            onClick={() => removeFromCart(state.user?._id,products?._id)}
        >
            x
        </button>

        <div style={{ height: "280px", width: "200px" }}>
        <img src={products.product?.image} width="100%" height="100%" alt={products.product?.productName} />
        </div>
        <div>
            <div className="pd2">
            <h3> {products.product?.name} </h3>
            <div>Rs. {products.product?.price}</div>
            {products.product?.inStock && <div> In Stock </div>}
            {!products.product?.inStock && <div> Out of Stock </div>}
            <div>rating {products.product?.rating}</div>
            {products.product?.fastDelivery ? (
            <div> Fast Delivery </div>
            ) : (
            <div> 3 days minimum </div>
            )}
            </div>
            <div className="horizontal-card center">
            <button
            className="btn primary-btn md-btn mr1"
            onClick={() =>
                products.quantity !== 0
                ? decrementItem(products?._id,cartId,state.user?._id)
                : "dataDispatch({ type: REMOVE_CART, id: id })"
            }
            >
            -
            </button>

            {products.quantity === 0 ? 0 : <div className="justify-center">{products.quantity}</div>}
            <button
            className="btn primary-btn md-btn mr1"
            onClick={() =>
                incrementItem(products?._id,cartId,state.user?._id)
            }
            >
            +
            </button>
            <button className="btn primary-btn md-btn mr1">Buy now</button>
        </div>
        </div>
        
        </div>
    
    </div>
)
}
