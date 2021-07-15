import { useReducer } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useLogin } from "../Context/LoginContext"

export const loginReducer  = (state,{type,payload}) =>{
    switch (type){
        case "email":
            return {
            ...state,
            email: payload
            };
        case "password":
            return {
            ...state,
            password: payload
            };
        case "reset":
            return {
            ...state,
            password: "",
            email: ""
            };
        default:
            return state;
        }
}

export const Login = () =>{
    const {login,userLogin,userLogout} =useLogin()
    const {state} =useLocation()
    const navigate = useNavigate()

    const [{ email, password }, dispatch] = useReducer(loginReducer, {
        email: "",
        password: ""
      });

    return(
        <div className="horizontal-card center wrap main-section">

            <form className=" card block-card ">
                <div className="center sub-heading mr1">Login page</div>
                <div className="vertical-card center">
                    <input className="input curve" type="email" placeholder="Email" required 
                    onChange={(e) =>
                        dispatch({ type: "email", payload: e.target.value })
                      }></input>
                    <input className="input curve" type="password" placeholder="Password" required
                    onChange={(e) =>
                        dispatch({ type: "password", payload: e.target.value })
                      }></input>
                    <button  className="secondary-btn md-btn btn" value="send" onClick={(e)=>
                    {       
                        if(!login){
                            console.log(email,password)
                            userLogin(email,password,state,navigate)

                            console.log(email,password)
                            
                            
                            e.preventDefault()
                            // userLogin(email,password,state,navigate)
                            // console.log(state)
                            // console.log(state?.from)
                            
                            }
                            else{
                                userLogout()
                                // navigate(state?.from?state.from:"/login")
                            }
                        }
                    }          

                    >
                        {login?"Logout":"Login"}
                    </button>
                    <div className="grey-text">
                        Not registered yet?
                        <Link to="/register"> Register here</Link>
                    </div>
                </div>
                
            </form>
            
        </div>
    )
} 