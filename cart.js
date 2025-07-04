import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Info from "./info";
import "./cart.css"
import "./info.css"
function Cart(){
    const [cartitem,setcartitem]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        const storedCart=JSON.parse(localStorage.getItem("cart"))||[]; // loading cart item from localstorage if it is empty []
        const updatedcart= storedCart.map(item=>({...item,quantity:1})); //adding quantity 1 for each item 
        setcartitem(updatedcart);
    },[]);
    
    const decrease=(id)=>{
        const updated=cartitem.map(item=>{
            if(item.id===id && item.quantity>1){
               return {...item,quantity:item.quantity-1}
            }
            return item;
        });
        setcartitem(updated)
           
        
    }

     const increase=(id)=>{
        const updated=cartitem.map(item=>{
            if(item.id===id){
                return{...item,quantity:item.quantity+1}
            }
            return item
        });
        setcartitem(updated)
    }

    const handleRemove=(id)=>{
        const updated=cartitem.filter(item=>item.id!==id)
        setcartitem(updated)
        localStorage.setItem("cart",JSON.stringify(updated))
    }
    const totalAmount = cartitem.reduce(
        (total, item) => total + item.price * item.quantity,
        0
        );
    const handlepay=()=>{
      navigate("/cart/pay")
    }

     return (
    <div className="cart-cont">
      <h2 className="text-cart">Your Cart</h2>

      {cartitem.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {/* Header row */}
          <div className="bill-row bill-header">
            <div className="col-main">Item</div>
            <div className="col">Quantity</div>
            <div className="col">Price (₹)</div>
            <div className="col">Total (₹)</div>
            <div className="col">Actions</div>
          </div>

          {/* Items */}
          {cartitem.map(item => (
            <div className="bill-row" key={item.id}>
              <div className="col-main">
                <img src ={`/${item.image}`} alt={item.name} className="item-img"/>
                 <div className="item-name">{item.name}</div>
              </div>
              <div className="col">
                <div className="col-quantity">
                    <button onClick={() => decrease(item.id)}>-</button>
                    <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                    <button onClick={() => increase(item.id)}>+</button>
                </div>
              </div>
              <div className="col text">{item.price}</div>
              <div className="col text">{item.price * item.quantity}</div>
              <div className="col">
                <button onClick={() => handleRemove(item.id)} className="pay">Remove</button>
              </div>
            </div>
          ))}

          {/* Total row */}
          <div className="bill-total">
            <h3 className="total">Total Amount:</h3> 
            <button className="  pay-total ml-5" onClick={handlepay}>₹{totalAmount}</button>
          </div>
            <div className="info">
              <Info/>
            </div>
        </>
      
      )}
      
      
    </div>
  );
}
export default Cart