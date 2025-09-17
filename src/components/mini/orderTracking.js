import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import "./ordertracking.css"
import io from 'socket.io-client';
const SERVER_URL = "http://localhost:3000";
const socket = io(SERVER_URL);

function OrderTrackingPage() {
    const { orderId } = useParams(); // Get the order ID from the URL
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    // This effect runs once to fetch the initial order details
    useEffect(() => {
        const fetchOrderDetails = async () => {
            const token = Cookies.get("token");
            try {
                const response = await fetch(`http://localhost:3000/order/${orderId}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (response.ok) {
                    const data = await response.json();
                    setOrder(data);
                }
            } catch (err) {
                console.error("Failed to fetch order details:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchOrderDetails();
    }, [orderId]);

    // This effect sets up the real-time listener
    useEffect(() => {
        const handleOrderUpdate = (updatedOrder) => {
            // Check if the update is for the order we are currently viewing
            if (updatedOrder.order_id === parseInt(orderId)) {
                // Update the state with the new status
                setOrder(prevOrder => ({ ...prevOrder, status: updatedOrder.status }));
            }
        };

        socket.on('order_update', handleOrderUpdate);

        return () => {
            socket.off('order_update', handleOrderUpdate);
        };
    }, [orderId]);

    if (loading) {
        return <div>Loading your order status...</div>;
    }

    if (!order) {
        return <div>Order not found.</div>;
    }

    return (
        <div className="order-tracking-container">
            <h1>Tracking Order #{order.order_id}</h1>
            <div className="order-status-card">
                <p>Current Status: <strong>{order.status}</strong></p>
                {/* You can add a visual progress bar here later */}
            </div>

            <div className="order-details-card">
                <h2>Order Summary</h2>
                <p>Total: ₹{order.total_price}</p>
                {JSON.parse(order.items).map(item => (
                    <div key={item.id} className="tracking-item-detail">
                        <img 
                            src={`http://localhost:3000${item.photo}`} 
                            alt={item.name} 
                            className="tracking-item-image"
                        />
                        <div className="tracking-item-info">
                            <p>{item.name}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Price: ₹{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OrderTrackingPage;