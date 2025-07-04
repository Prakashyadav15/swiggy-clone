import {Link,useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import "./home.css"


function Navbar(){
   const navigate=useNavigate()
    const handleLogout=async()=>{
       Cookies.remove("token")
        navigate("/login")
    }
    return(
        <div>
            <nav className="navbar">
                <div className="logo">
                    <img src="/swiggyClone/frame275.png" alt="log" className="logo-img"/>
                    <h3>Dragons</h3>
                </div>
                <div className="options">
                    <Link to="/home" className="link-deco" >Home</Link>
                    <Link to="/cart" className="link-deco" >Cart</Link>
                    <button className="logoutbut" onClick={handleLogout}>Logout</button>
                </div>
                        
            </nav>               
            <hr/>
       </div>
    )
}
export default Navbar