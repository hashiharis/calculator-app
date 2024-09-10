import { useContext, useEffect } from "react"
import AuthContext from "../Context/AuthContext"
import { useNavigate } from "react-router-dom"

export const Home=()=>{

    const{auth}=useContext(AuthContext)
    const navigate=useNavigate()

    useEffect(()=>{
        if(auth){
            navigate("/calculator")   
        }
        else{
           navigate("/")
    
        }
    },[auth,navigate])

   
    return(
        <div>
            <h1>Home Page</h1>
            <button onClick={()=>navigate("/login")}>Login</button>
        </div>
    )
}