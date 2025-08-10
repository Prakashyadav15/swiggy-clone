import { Outlet } from "react-router-dom";
import Navbar from "./navbar";


function Layout() {
    
  return (
    <div className="layout">
      <Navbar />
   
      <div className="main-content">
        <Outlet />
        
      </div>
    
      
    </div>
  );
}
export default Layout;
