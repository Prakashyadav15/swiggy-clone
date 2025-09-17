import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useParams, useNavigate } from "react-router-dom";
import "./display.css";

// Note: I've removed the useCart import as it wasn't being used in the direct order flow.
function Displayres() {
    const { slug } = useParams(); // This correctly matches your router
    const [restaurant, setRestaurant] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchRestaurantData = async () => {
            const token = Cookies.get('token');
            const response = await fetch(`http://localhost:3000/restaurants/${slug}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if(response.ok) {
                const data = await response.json();
                setRestaurant(data);
            }
        };

        if (slug) {
            fetchRestaurantData();
        }
    }, [slug]);

    const handleDirectOrder = async (item) => {
        try {
            const token = Cookies.get("token");
            if (!token) {
                alert("You must be logged in to place an order.");
                return;
            }

            const orderDetails = {
                restaurant_id: item.restaurant_id,
                items: [{ ...item, quantity: 1 }],
                total_price: item.price,
            };
            
            const response = await fetch("http://localhost:3000/place-order", {
                method: "POST",
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
                body: JSON.stringify(orderDetails)
            });

            if (response.ok) {
                const newOrder = await response.json();
                console.log("Navigating with Order ID:", newOrder.order_id);
                navigate(`/order-status/${newOrder.order_id}`);
            } else {
                const errorData = await response.json();
                alert(`Failed to place order: ${errorData.error}`);
            }
        } catch (err) {
            console.error("Error placing order:", err.message);
        }
    };

    if (!restaurant) {
        return <div>Loading...</div>;
    }

    return (
        <div className="display">
            <h1 className="res-name">{restaurant.details.res_name}</h1>
            
            {restaurant.menu.map(item => (
                <div key={item.id} className="menu-item">
                    <img src={`http://localhost:3000${item.photo}`} alt={item.name} className="img-back" />
                    <h4 className="item-nam">{item.name}</h4>
                    <p className="item-description">{item.description}</p>
                    <div className="cart-controls">
                        <p className="item-price">₹{item.price}</p>
                        <button onClick={() => handleDirectOrder(item)} className="order-but">
                            Place Order
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Displayres;