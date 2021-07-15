import { useReducer } from "react";
// import { useLocation, useNavigate } from "react-router-dom"
// import { useLogin } from "../Context/LoginContext"

export const registerReducer  = (state,{type,payload}) =>{
    switch (type){
        case "email":
            return {
            ...state,
            email: payload
            };
        case "firstName":
            return {
            ...state,
            firstName: payload
            };
        case "lastName":
            return {
            ...state,
            lastName: payload
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
            email: "",
            firstName: "",
            lastName: ""
            };
        default:
            return state;
        }
}

export const Register = () =>{
    // const {login,userLogin,userLogout} =useLogin()
    // const {state} =useLocation()
    // const navigate = useNavigate()

    const [{ email, password }, dispatch] = useReducer(registerReducer, {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
      });

    return(
        <div className="horizontal-card center wrap main-section">

            <form className="sub-heading card block-card ">
                <div className="mr1">Register page</div>
                <div className="vertical-card center">
                <input className="input curve" type="string" placeholder="First name" required 
                    onChange={(e) =>
                        dispatch({ type: "email", payload: e.target.value })
                      }></input>
                    <input className="input curve" type="string" placeholder="Last name" required
                    onChange={(e) =>
                        dispatch({ type: "password", payload: e.target.value })
                      }></input>
                    <input className="input curve" type="email" placeholder="Email" required 
                    onChange={(e) =>
                        dispatch({ type: "email", payload: e.target.value })
                      }></input>
                    <input className="input curve" type="password" placeholder="Password" required
                    onChange={(e) =>
                        dispatch({ type: "password", payload: e.target.value })
                      }></input>
                    <button  className="secondary-btn md-btn btn" value="send" >
                        {"Register"}
                    </button>

                </div>
                
            </form>
            
        </div>
    )
} 