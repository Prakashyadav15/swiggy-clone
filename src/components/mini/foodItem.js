import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import Cookies from "js-cookie"
import "./foodItem.css"
import { Link } from "react-router-dom";
import { ItemsList } from "./data";
import "./display.css"
function FoodItem(){
    const [restaurants, setRestaurants] = useState([]);

   const navigate=useNavigate();
         const handleSelected=(item)=>{  
              navigate(`/food/${item.id}`,{state:{item}});  // pass data
           }   
     useEffect(() => {
                const fetchRestaurants = async () => {
                     const token =Cookies.get("token")
                    try{
                        let url='http://localhost:3000/restaurants'
                        let options={
                            headers:{
                                'Authorization': `Bearer ${token}`
                            }
                        }
                        const response=await fetch(url,options)
                        const data=await response.json()
                        if(response.ok){
                             console.log(data)
                        setRestaurants(data)
                        }
                       
                    }catch(err){
                        console.log(err)
                    }
                }
        
                fetchRestaurants();
            }, []);

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
        <div className="res-cont">
            <h1 className="res">Restaurants Most Fav</h1>
            <ul >
                {restaurants.map(restaurant => (
                    <li key={restaurant.res_id} className="res-list">
                    <Link to={`/restaurants/${restaurant.res_slug}`}>
                        <h2 className="res-name">{restaurant.res_name}</h2>
                    </Link>
                    </li>
                ))}
            </ul>
        </div>
       
        
       
       </>
    )
    

}

export default FoodItem