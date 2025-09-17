import { BrowserRouter,Route,Routes } from "react-router-dom"
import Signup from "./components/mini/index";
import Login from "./components/mini/login";
import Home from "./components/mini/home";
import Similar from "./components/mini/similarItems";
import Layout from "./components/mini/loyout";
import Cart from "./components/mini/cart";
import Displayres from "./components/mini/diplayres";
import Pay from "./components/mini/pay";
import History from "./components/mini/history";
import OrderTrackingPage from "./components/mini/orderTracking";
import {CartProvider}  from "./components/mini/cartcontext";
const App=()=> {
    
   return (
    <BrowserRouter>
     <CartProvider>
    <Routes>
         <Route path="/" element={<Login/>}/>
        <Route path="/reg" element={<Signup/>}/>
        
            <Route element={<Layout/>}>

               <Route path="/home" element ={<Home/>}/>
               <Route path="/food/:id" element={<Similar/>}/>
               <Route path="/restaurants/:slug" element={<Displayres />} />
               <Route path="/cart" element={<Cart/>}/>
               <Route path="/cart/pay" element={<Pay/>}/>
               <Route path="/order-status/:orderId" element={<OrderTrackingPage/>}/>
               <Route path="/history" element={<History/>}/>
            </Route>
        
    </Routes>
    </CartProvider>
    </BrowserRouter>
    
   
   )
    
    

};
    
  



export default App;
