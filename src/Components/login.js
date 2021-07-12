import { useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { useLogin } from "../Context/LoginContext"

export const loginReducer  = (state,{type,payload}) =>{
    switch (type){
        case "username":
            return {
            ...state,
            username: payload
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
            username: ""
            };
        default:
            return state;
        }
}

export const Login = () =>{
    const {login,userLogin,userLogout} =useLogin()
    const {state} =useLocation()
    const navigate = useNavigate()

    const [{ username, password }, dispatch] = useReducer(loginReducer, {
        username: "",
        password: ""
      });

    return(
        <div className="horizontal-card center wrap main-section">

            <form className="sub-heading card block-card ">
                <div className="mr1">Login page</div>
                <div className="vertical-card center">
                    <input className="input curve" type="username" placeholder="Email" required 
                    onChange={(e) =>
                        dispatch({ type: "username", payload: e.target.value })
                      }></input>
                    <input className="input curve" type="password" placeholder="Password" required
                    onChange={(e) =>
                        dispatch({ type: "password", payload: e.target.value })
                      }></input>
                    <button type="submit" className="secondary-btn md-btn btn" onClick={()=>
                    {
                        if(!login){
                            userLogin(username,password,state,navigate)
                            console.log(state)
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

                </div>
                
            </form>
            
        </div>
    )
} 