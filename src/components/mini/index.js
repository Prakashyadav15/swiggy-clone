import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';

import './reg.css'
function Signup(){

    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [number,setnumber]=useState("");
    const [email,setemail]=useState("");
    const [error,seterror]=useState("");
    const[success,setsuccess]=useState("");
    const navigate=useNavigate();

     
  

    const handlesubmit=async(e)=>{
     e.preventDefault()

   

     if(!username || !email || !number || !password){
        seterror("All fields are required")
        return;
     }

     const usernameRegex=/^[A-Za-z\s]+$/;
     if(!usernameRegex.test(username)){
        seterror("username should only consist letter")
        return;
     }

     const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if(!emailRegex.test(email)){
        seterror("email is invalidform")
        return
     }

     try{
            let url="http://localhost:3000/userreg"
        
            let options={
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    
                    username,
                    password,
                    email,
                    contact_number:number,
            })
            
            }
            
            const response= await fetch(url,options)
            const data= await response.json()
            if(response.ok){
                console.log(data)
            setsuccess("signup successfull")

            setusername("")
            setemail("")
            setnumber("")
            setpassword("")
 
           
            navigate("./login")
            

            }else{
                seterror("user not added")
            }

       
        }catch(err){
            seterror("something went wrong")
        }
   
    
    }
    
    return(
        <div className="signup-cont">
            <div className="signup-form">
                <form className="form">
                    <img src="swiggyclone/logo.png" className="imgg" alt="logo"/>
                    <h3 className="title">Dragons kitchen</h3>
                    <h4 className="text-center mt-2">Signup</h4>
                    <div>
                        <label htmlFor="user" className="label">USERNAME</label>
                        <input id="user" value={username} type="text" className="intbox" placeholder="username" onChange={(e)=>setusername(e.target.value)}/>

                        <label htmlFor="pass" className="label">PASSWORD</label>
                        <input id="pass" value={password} type="password" className="intbox"  placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>

                         <label htmlFor="mail" className="label">EMAIL</label>
                        <input id="mail" value={email} type="text" className="intbox"  placeholder="email" onChange={(e)=>setemail(e.target.value)}/>

                        <label htmlFor="num" className="label">MOBILE NUMBER</label>
                        <input id="num" value={number} type="tel" pattern="[0-9]{10}" inputMode="numeric" maxLength={10} className="intbox"  placeholder="mobile number" onChange={(e)=>setnumber(e.target.value)}/>

                        <button className="signup" type="submit" onClick={handlesubmit}> signup</button>
                        {error && <p className="err">{error}</p>}
                        {success&& <p>{success}</p>}
                    </div>
                </form>
                <div className="line">
                    <hr/>OR<hr/>
                </div>
                <div className="link">
                    <Link to="/login"className="lin" >Login</Link>

                </div>
            </div>

        </div>
    )



}
export default Signup