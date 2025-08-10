
import { useNavigate } from "react-router-dom"
function Pay(){
    const navigate=useNavigate()
    const handlehome=()=>{
        navigate("/home")
    }
    return(
        <div className="d-flex flex-column justify-content-center align-items-center p-5">
           <img src="/swiggyClone/tick.png" alt="tick"/>
           <h3>Payment successful</h3>
           <p style={{color:"grey",margin:"0" }}>thanks yoou for ordering </p>
          <p style={{color:"grey" }}> your payment is successfully completed</p>
           <button style={{backgroundColor:"orange",
            color:"white",border:"none", borderRadius:"5px",
           }} onClick={handlehome}>Go To Home Page</button>
        </div>
    )
}export default Pay