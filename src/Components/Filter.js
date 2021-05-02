import { useProduct } from "../Context/ProductContext"

export const Filter = () =>{

    const {productState,productDispatch} = useProduct()

    return(
        <div className="aside-nav">
            <div className="horizontal-card space-between center pd2-l-r">
                <p className="md-txt"> Filters </p>
                <button className="btn link-btn md-btn" style={{ margin: "0 1rem" }}
                    onClick={() => productDispatch({ type: "clear" })}>
                    clear
                </button>
            </div>
            <div>
                <div className="vertical-card shadow pd1 ">
                    <label className=" align-center " htmlFor="fastDelivery" style={{ margin: "0 1rem" }}>
                        <input
                            checked={productState.showFastDeliveryOnly}
                            className="mg1-r"
                            id="fastDelivery"
                            type="checkbox"
                            onChange={() => productDispatch({ type: "TOGGLE_DELIVERY" })}
                        ></input>
                    fast delivery
                    </label>

                    <label className=" align-center" htmlFor="showInStock" style={{ margin: "0 1rem" }}>
                        <input
                            type="checkbox"
                            className="mg1-r"
                            checked={productState.showInventoryAll}
                            id="showInStock"
                            onChange={() => productDispatch({ type: "TOGGLE_INVENTORY" })}
                        ></input>
                    Include out of Stock
                    </label>

                </div>
                
            </div>
            <div className="vertical-card shadow pd1 mg1-t">
                <label className=" align-center" style={{ margin: "0 1rem" }}>
                    <input
                    name="sort"
                    className="mg1-r"
                    type="radio"
                    checked={productState.uncheck}
                    onClick={() =>
                        productDispatch({ type: "SORT", payLoad: "Price-low-high" })
                    }
                    ></input>
                    Price-Low-to-high
                </label>
                <label className=" align-center" style={{ margin: "0 1rem" }}>
                    <input
                    name="sort"
                    className="mg1-r"
                    type="radio"
                    checked={productState.uncheck}
                    onClick={() =>
                        productDispatch({ type: "SORT", payLoad: "Price-high-low" })
                    }
                    ></input>
                    Price-High-to-Low
                </label>
            </div>
            
      </div>
      
    )
}