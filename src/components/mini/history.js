import Cookies from "js-cookie"
import {useEffect, useState} from "react"
import "./history.css"
function History(){
    const [history,sethistory]=useState([])

    useEffect(()=>{
        const fetchhistory=async()=>{
            try{
                const token=Cookies.get("token")
                let url="http://localhost:3000/userhistory";
                let option={
                    method:"GET",
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
                const response=await fetch(url,option)
                const data=await response.json()
                
                sethistory(data)
            }catch(err){
                console.log("error fetching history",err);
            }
        }
        fetchhistory()
    },[])
    
    return(
        <div className="history-bg" >
            <h1 className="history ml-3">Order History</h1>
            <div className="list-order">
                <hr/>
                <ul className="">
                    
                    {history.map((item,index)=>(
                        <li key={index}>
                           <p className="text">order id:{item.id}</p>
                         <div className="date">
                            <p className="text-it">items:</p>
                            <p className="text-it">{item.order_date}</p>
                         </div>
                           
                           <ul>
                            {(() => {
                            try {
                                const itemsArray = JSON.parse(item.items || "[]");
                                return itemsArray.map((itm, i) => (
                                <li key={itm.id || i} className="date">
                                    <p className="text">🍛 {itm.name}  × {itm.quantity}</p>
                                    <p className="text">- ₹{itm.price}</p>
                                </li>
                                ));
                            } catch (err) {
                                return <li>Invalid item data</li>;
                            }
                            })()}
                        </ul>
                           <hr/>
                           <div  className="date">                           
                             <p className="text">Total price:</p>
                            <p className="text">{item.total_price}</p>
                           </div>
                           
                            <hr/>
                             </li>
                    ))}
                </ul>
                
            </div>
           
        </div>
    )
}
export default History