import { useState } from "react";
import {Link}from "react-router-dom"
import { useData } from "../Context/DataContext"
// import { AsideNav } from "./Aside_Navigation";
export const getTotalItem = (item) => {
    return item.reduce((total, { qty }) => total + qty, 0);
  };
export const Navigation = () =>{
    const { wishlist, cartQuantity,dataDispatch} = useData()
    const [searchItem,setSearchItem] = useState("")
    console.log(searchItem)
    return(
        <div>
            <nav className="header align-center">
            <div>
                <Link className="nav-links logo" to="/">Atery-Mart</Link>
            </div>
            <div className="center search-bar">
                <input className="search"
                placeholder="search products here..."
                onChange={(e) =>setSearchItem(e.target.value)}
                >
                </input>
                <i onClick={()=> dataDispatch({ type: "SEARCH", payLoad: searchItem })} className=" center pd1-r" style={{height:"2rem",width:"2rem",cursor:"pointer"}}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" fill="black" viewBox="0 0 100 125" enable-background="new 0 0 100 100"><path d="M87,81.3L69.1,63.4c9-11.7,8.1-28.6-2.7-39.3c-5.9-5.9-13.5-8.8-21.2-8.8s-15.3,2.9-21.2,8.8c-11.7,11.7-11.7,30.7,0,42.4  c5.9,5.9,13.5,8.8,21.2,8.8c6.4,0,12.8-2,18.1-6.1L81.3,87c0.8,0.8,1.8,1.2,2.9,1.2c1,0,2.1-0.4,2.9-1.2  C88.6,85.5,88.6,82.9,87,81.3z M45.3,67.2c-5.9,0-11.3-2.3-15.5-6.4c-8.5-8.5-8.5-22.4,0-31c4.1-4.1,9.6-6.4,15.5-6.4  s11.3,2.3,15.5,6.4s6.4,9.6,6.4,15.5c0,5.9-2.3,11.3-6.4,15.5S51.1,67.2,45.3,67.2z"></path></svg>
                </i>
            </div>
            <div>
                <ul className="non-bullet nav-social-links inline-list align-center spa">
                <Link
            to="/cart"
            className="badge-container nav-btn btn  relative-box"
            // onClick={() => setRoute("Cart")}
          >
            <i  style={{height:"2rem",width:"2rem"}}>
                <svg xmlns="http://www.w3.org/2000/svg" dataname="Layer 1" viewBox="0 0 100 125" x="0px" y="0px"><g dataname="Group"><path dataname="Path" d="M41.9,65.5a9.4,9.4,0,1,0,9.2,9.3A9.2,9.2,0,0,0,41.9,65.5Z"></path><path dataname="Path" d="M70.6,65.5a9.4,9.4,0,1,0,9.1,9.3A9.2,9.2,0,0,0,70.6,65.5Z"></path><path dataname="Path" d="M87.7,26.3H28.4L25.8,18A3,3,0,0,0,23,15.8H9.3v6H20.7L32.6,60a2.9,2.9,0,0,0,2.8,2.1H78.7A3.1,3.1,0,0,0,81.6,60l9-29.8a3,3,0,0,0-2.9-3.9Z"></path></g></svg>
            </i>

           {cartQuantity>0? <span
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                backgroundColor: "red",
                padding: "0.2rem",
                width: "1rem",
                height: "1rem",
                color: "white"
              }}
              className="sm-btn round center"
            >
              {cartQuantity}
            </span>:<span></span>}
          </Link>
          <Link
          to="/wishlist"
            className="badge-container nav-btn btn relative-box"
            // onClick={() => setRoute("Wishlist")}
          >
            <i  style={{height:"2rem",width:"2rem"}}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="black" version="1.1" x="0px" y="0px" viewBox="0 0 512 640" enable-background="new 0 0 512 512"><g><path d="M256,448l-30.164-27.211C118.718,322.442,48,258.61,48,179.095C48,114.221,97.918,64,162.4,64   c36.399,0,70.717,16.742,93.6,43.947C278.882,80.742,313.199,64,349.6,64C414.082,64,464,114.221,464,179.095   c0,79.516-70.719,143.348-177.836,241.694L256,448z"></path></g></svg>
            </i>
            {getTotalItem(wishlist)>0?<span
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                backgroundColor: "red",
                padding: "0.2rem",
                width: "1rem",
                height: "1rem",
                color: "white"
              }}
              className="sm-btn round center"
            >
              {getTotalItem(wishlist)}
            </span>:<span></span>}
          </Link>
                </ul>
            </div>
        </nav>
        {/* <div className="aside-nav"></div> */}
                {/* <AsideNav/> */}
        
        </div>
    )
}