import React, { createContext, useState, useEffect, useContext } from "react";

export const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  // OPTIMIZATION: Use a function for initial state to run it only once
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
      return savedCart;
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
      return [];
    }
  });

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((p) => p.id === item.id);
      if (existingItem) {
        return prevCart.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };
  
  // RENAMED for clarity: This function decreases quantity
  const decreaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart
        .map((p) =>
          p.id === itemId ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0) // Automatically remove if quantity is 0
    );
  };
  
  // NEW: Completely removes an item regardless of quantity
  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((p) => p.id !== itemId));
  };

  // NEW: Clears the entire cart
  const clearCart = () => {
    setCart([]);
  };
  
  // NEW: Calculated values are provided to all consumers
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);


  // The value provided to consuming components
  const value = {
    cart,
    addToCart,
    decreaseQuantity,
    removeItem,
    clearCart,
    cartCount,
    totalAmount
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};