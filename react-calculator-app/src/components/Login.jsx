import { useContext, useEffect, useState } from "react"
import AuthContext from "../Context/AuthContext"
import { useNavigate } from "react-router-dom"

export const Login=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [passwordType,setPasswordType]=useState("password")
    const {auth,isLogin,isLogout}=useContext(AuthContext)
    const navigate=useNavigate();
    useEffect(()=>{
        if(auth){
            navigate("/calculator")
        }
        else{
            navigate("/login")
        }
    },[auth,navigate])


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
            <input value={password} type={passwordType} placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />
            {passwordType==="password"&&<button onClick={()=>{
                setPasswordType("text")
            }}>Show</button>
            }
            {passwordType==="text" && <button onClick={()=>{
                setPasswordType("password")
            }}>Hide</button>}
            <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
    )
}