import { useCart } from "./cartcontext";
import { useNavigate } from "react-router-dom";
import Info from "./info";
import "./cart.css"
import "./info.css"
function Cart(){
  
   const { cart, increaseQuantity, decreaseQuantity, handleRemove, totalAmount } = useCart();
   const navigate=useNavigate();

      const handlepay=async()=>{
      try{
        const user = JSON.parse(localStorage.getItem("user"));
        const user_id = user?.id;

        if (!user_id) {
          alert("User not logged in!");
          return;
        }

        const order={
          id:Date.now().toString(),
          user_id:user?.id,
          items:JSON.stringify(cart),
          total_price:cart.reduce((acc,item)=>acc+item.price * item.quantity,0),
           order_date: new Date().toISOString()
        }

        let url="http://localhost:3000/history"
        let options={
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(order)
        }
        const response=await fetch(url,options)
        const data=await response.json()
        console.log(data)
        localStorage.removeItem("cart")
       navigate("/cart/pay")
      }
      catch(err){
        console.log(err.message)
      }
      
    }

     return (
    <div className="cart-cont">
      <h2 className="text-cart">Your Cart</h2>

      {cart.length === 0 ? (
        <div  className="empty">
          <img src="swiggyClone/empty-cart.png" alt="empty"/>
        </div>
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
          {cart.map(item => (
            <div className="bill-row" key={item.id}>
              <div className="col-main">
                <img src ={`/${item.image}`} alt={item.name} className="item-img"/>
                 <div className="item-name">{item.name}</div>
              </div>
              <div className="col">
                <div className="col-quantity">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
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