import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { ItemsList } from "./data";
import "./similarItem.css"
import { CartContext } from "./cartcontext";
 function Similar(){

    const {id}=useParams()
    const item= ItemsList.find((i)=>i.id===Number(id))
    const[sortorder,setsortorder]=useState("highest")
    const {cart,addToCart,removeFromCart } = useContext(CartContext);


    const handlesort=(e)=>{
        setsortorder(e.target.value)
     }

    const getsorteditems=()=>{
        if(!item|| !Array.isArray(item.similarItems)) return [];
      const itemscopy=[...item.similarItems]  ;

      if(sortorder==="highest"){
        return itemscopy.sort((a,b)=>b.rating-a.rating);
      }else{
        return itemscopy.sort((a,b)=>a.rating-b.rating);
      }
     
    }
    const getQuantity=(itemId)=>{
      const found=cart.find((c)=>c.id===itemId)
      return found ? found.quantity:0;
    }

 
       return(
            <>
            
            <div className="similar-items">
                <h4 className="h">Similar Dishes</h4>
                <div className="filter">
                    <p className="sort">sort by</p>
                    <select onChange={handlesort}className="sorting" value={sortorder}>
                        <option value="highest">highest rating</option>
                        <option value="lowest">lowest rating</option>
                     </select>
                </div>
                <hr/>
                <div className="similar-items-list ">
                    {getsorteditems().map((similar)=>(
                     <div key={similar.id} className="items-card shadow">
                        <div className="img-card">
                            <img src={`/${similar.image}`} alt={similar.image} className="similar-img"/>
                        </div>
                        <div className="card-details">
                            <h5 className="name">{similar.name}</h5>
                            <p className="description">{similar.description}</p>
                           
                            <div className="item-rating">
                                 <p className="price">₹{similar.price} </p>
                                <span>⭐ {similar.rating}</span>
                            </div>
                              {quantity > 0 ? (
                              <div className="quantity-controls">
                                <button onClick={() => removeFromCart(similar.id)}>-</button>
                                <span>{quantity}</span>
                                <button onClick={() => addToCart(similar)}>+</button>
                              </div>
                            ) : (
                              <button onClick={() => addToCart(similar)} className="add">
                                Add
                              </button>
                            )}
                        </div>

                    </div>
                                    
                    ))}
                </div>
            </div>
       </>
       )

}
export default Similar;