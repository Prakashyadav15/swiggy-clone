import { useNavigate } from "react-router-dom";
import "./foodItem.css"
import { ItemsList } from "./data";
function FoodItem(){
   const navigate=useNavigate();
   const handleSelected=(item)=>{  
        navigate(`/food/${item.id}`,{state:{item}});  // pass data
     }
      
       

    return(
        
        <><div className="card">
                
                {ItemsList.map((item)=>(
                
                <li key={item.id} className="food-list" onClick={()=>handleSelected(item)}>
                    <div className="food-item" >
                        <img src={item.image} className="item-img" alt={item.name} />

                    </div>
                    <div className="item-details">
                        <h5>{item.name}</h5>
                        
                    </div>
                    </li>   
                 ))}

            
        </div>
       
        
       
       </>
    )
    

}

export default FoodItem