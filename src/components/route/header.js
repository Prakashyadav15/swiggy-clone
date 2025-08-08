import {Link} from "react-router-dom"
import "./router.css"   
const Header=()=>(
    <div className="wavebar">
          
            <img src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png" className="wave"/>

            
          <ul className="nav-menu">
            <li>
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li>
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li>
                <Link className="nav-link" to="/contact">Contact</Link>
            </li>
        </ul>  
        <div className="homecont">
            <div className="prof">
                <img src="https://assets.ccbp.in/frontend/react-js/profile-img.png" alt="img" className="img"/>
                <h3>Wade Warren</h3>
                <p>Software developer at UK</p>
            </div>                  
        </div>                    
    </div>
)  
export default Header 