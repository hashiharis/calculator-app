import { useContext, useEffect } from "react"
import AuthContext from "../Context/AuthContext"
import { useNavigate } from "react-router-dom"

export const Navbar=()=>{

    
const {auth,isLogout}=useContext(AuthContext)
const navigate=useNavigate()

useEffect(()=>{
    if(!auth){
        navigate("/")
    }
},[auth,navigate])
    return(
        <nav style={{width:"100%",backgroundColor:"#FFFFDD", textAlign:"right",paddingRight:"2em"}}>
            <div style={{display:"flex", justifyContent:"space-evenly", alignContent:"center"}}>
                <h4 style={{textAlign:"center"}}>Calculator</h4>
                <button style={{backgroundColor:"#F1AF60", border:"none", borderRadius:"5px", color:"white", alignSelf:"center", padding:"0.5em"}} onClick={()=>{
                    isLogout()
                }}>Logout</button>
              
            </div>
        </nav>
    )
}