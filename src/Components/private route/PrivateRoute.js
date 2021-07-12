import { Navigate, Route } from "react-router-dom"
import { useLogin } from "../../Context/LoginContext"

export const PrivateRoute = ({path,...props}) =>{
    const {login} = useLogin()
    return login?
        <Route  path={path} {...props} />
        : 
        <Navigate state={{from:path}} replace to="/login"/>
}