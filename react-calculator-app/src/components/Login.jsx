import { useContext, useEffect, useRef, useState } from "react"
import AuthContext from "../Context/AuthContext"
import { useNavigate } from "react-router-dom"

export const Login=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {auth,isLogin,isLogout}=useContext(AuthContext)
    const submitRef=useRef(null)
    const navigate=useNavigate();
    useEffect(()=>{
        if(auth){
            navigate("/calculator")
        }
        else{
            navigate("/login")
        }
    },[auth,submitRef,navigate])


    const handleSubmit=()=>{
      
        if(email==="admin@gmail.com"&& password==="admin@123")
        {    
            console.log("entered")
            isLogin()
        }
        else{
            isLogout()
        }
    }

    return(

        <div style={{margin:"auto", width:"20%", marginTop:"5em", display:"flex", flexDirection:"column", gap:"1em"}}>
            <input value={email} type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
            <input value={password} type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />
            <button ref={submitRef} type="button" onClick={handleSubmit}>Submit</button>
        </div>
    )
}