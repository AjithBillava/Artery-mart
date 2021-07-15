import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { fakeAuthAPI } from "../fakeAuthAPi";

export const LoginContext  = createContext();

export const LoginProvider = ({children}) => {
    useEffect(()=>{
        const loginStatus = JSON.parse(localStorage?.getItem("login"))
        loginStatus?.logged && setLogin(true)
    },[])

    const [login,setLogin] = useState(false)
    const userLogin = async (email,password,state,navigate )=>{
        try{
            // const response = await fakeAuthAPI(username,password)
            // if(!response.success){
            //     console.log(response.errorMessage)
            // }
            // if(response.success){
            //     setLogin(true)
            //     localStorage.setItem("login",JSON.stringify({logged:true})) 
            //     navigate(state?.from?state.from:"/")
            // }

            const {data} = await axios.post("https://artery-mart-backend.herokuapp.com/v1/api/user/login",{email,password})
            localStorage.setItem("token",data.token)
            setLogin(true)
            localStorage.setItem("login",JSON.stringify({logged:true})) 
            navigate(state?.from?state.from:"/")
            
        }catch(error){
            console.error(error)
            console.log(error.response)
            
        }
    }
    const userLogout = () =>{
        setLogin(false)
        localStorage.removeItem("login")

    }

    return(
        <LoginContext.Provider value={{login,userLogin,userLogout}}>
            {children}
        </LoginContext.Provider>
    )
    
}

export const useLogin = () => useContext(LoginContext)