import { useState } from "react";
import AuthContext from "./AuthContext";

const AuthContextProvider=({children})=>{

    const[auth,setAuth]=useState(false)

    const isLogin=()=>{
        setAuth(true)
    }

    const isLogout=()=>{
        setAuth(false)
    }

    return(
        <AuthContext.Provider value={{auth,isLogin,isLogout}}>
         {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;