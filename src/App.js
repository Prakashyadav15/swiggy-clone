import { BrowserRouter,Route,Routes } from "react-router-dom"
import Signup from "./components/mini/index";
import Login from "./components/mini/login";
import Home from "./components/mini/home";
import Similar from "./components/mini/similarItems";
import Layout from "./components/mini/loyout";
import Cart from "./components/mini/cart";
import Pay from "./components/mini/pay";
import History from "./components/mini/history";
const App=()=> {
    
   return (
    <BrowserRouter>
    <Routes>
        
        <Route path="" element={<Signup/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route element={<Layout/>}>
            <Route path="/home" element ={<Home/>}/>
            <Route path="/food/:id" element={<Similar/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/cart/pay" element={<Pay/>}/>
            {/* <Route path="/similar/:id" element={<SelectedItem />} /> */}
            <Route path="/history" element={<History/>}/>
         </Route>
        
    </Routes>
    </BrowserRouter>
    
   
   )
    
    

};
    
  



export default App;
