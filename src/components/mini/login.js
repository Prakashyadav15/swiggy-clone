import { useState,useEffect } from "react";
import {Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


import "./login.css"
function Login(){
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const [error,seterror]=useState("")
    const navigate=useNavigate()

   useEffect(()=>{
    const verifytoken=async()=>{
        try{
            const token=Cookies.get("token")
            if(token){
                navigate("/home")
            }

        }catch(err){
            navigate("/login")
        }
        }
        verifytoken();
        
    },[navigate])
    
    
    const  handlelogin=async(e)=>{
     e.preventDefault();
    
    if(!username|| !password){
        seterror("all details needed")
        return;
    }

    try{
        let url="http://localhost:3000/login"
        let options={
            method:"POST",
            credentials:"include",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({username,password})

        }
        const response=await fetch(url,options)
        const data = await response.json()
        console.log("Backend response:", data);
        if(response.ok && data.message === "Login successful" && data.user){
            seterror("Login successful")
        
            Cookies.set('token',data.token, { expires: 7});// expires in 7 days
            localStorage.setItem("user",JSON.stringify(data.user))
            console.log(data.user)
            navigate("/home")

        }else{
            seterror("invalid credentials")
        }
    }catch(err){
        alert("login error :"+ err.message);
        seterror("something went wrong")
    }

    
    
    }
    

    return(

        

    <div className="login-cont">
            <div className="cont-form">
            
                <form className="login-form">
                    <img src="swiggyClone/logo.png" className="img-icon" alt="logo"/>
                        <h3 className="dragon">Dragons kitchen</h3>
                       
                    <label htmlFor="user">USERNAME</label>
                    <input id="user" value={username} type="text" placeholder="username" onChange={(e)=>setusername(e.target.value)} className="int"/>

                    <label htmlFor="pass">PASSWORD</label>
                    <input id="pass" value={password} type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)} className="int"/>

                    <button type="submit" className="login-but" onClick={handlelogin}>Login</button>
                    {error && <p >{error}</p>}
                    <p className="reges">you can register if not?<Link to="/reg">reg</Link></p>
                </form>
        
            </div>
    </div>
    )

}
export default Login