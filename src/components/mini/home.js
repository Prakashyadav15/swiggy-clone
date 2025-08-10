import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import FoodItem from "./foodItem";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Required CSS
import { Carousel } from 'react-responsive-carousel';
import "./home.css"
import Info from "./info";
import "./info.css"

function Home(){
    const[search,setsearch]=useState("")






     const navigate=useNavigate();

     useEffect(()=>{
        const verifytoken=async()=>{
             try{
                const token=Cookies.get("token")
                if(!token){
                    navigate("/login")
                }
                let url ="http://localhost:3000/verify"
                let options={
                    method:"GET",
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                }
                const response=await fetch(url,options)
                const data=await response.json()
                if(!data.auth){
                    navigate('/login')
                }

             }catch(err){
                navigate("/login")
             }
        }
       verifytoken();
        
     },[navigate])

     
      
    
    return(
    <div className="dragon-bg">
        
        <div className="main-bg">
           
            <div className="atractive">
                <div className="grocery">
                    <img src="swiggyClone/prefect-gro.png" alt="gorcery" className="gro-img"/>
                </div>
                <div className="search-cont">
                    <h1 className="heading">Order food & Dicover best restaurants</h1>
                    <input className="searchint" type="search" placeholder="search" onChange={(e)=>setsearch(e.target.value)} value={search}/>
                    {/* {filteredsearch.length >0 &&(
                        <div className="search-results">
                        {filteredsearch.map(item => (
                            <div key={item.id} className="search-item" onClick={()=>navigate(`/similar/${item.parentId}?itemId=${item.id}`)} >
                            <img src={`/${item.image}`} alt={item.name} className="serach-img"/>
                            <span>{item.name}</span>
                            </div>
                        ))}
                        </div>
                    )
                    
                    } */}
                        <Carousel autoPlay infiniteLoop showThumbs={false}>
                        <div>
                            <img src="swiggyClone/biryani.jpg" alt="slide1" className="slide" />
                        
                        </div>
                        <div>
                            <img src="swiggyClone/special2.avif" alt="slide2" className="slide" />
                        
                        </div>
                        <div>
                            <img src="swiggyClone/foodie.avif" alt="slide3"  className="slide"/>
                        
                        </div>
                    </Carousel>
            
                </div>
                <div className="grocery">
                    <img src="swiggyClone/burger.png" alt="burger" className="burger"/>
                </div>
                
            </div>
            

        </div>

           <div>
             <h4>Choose your's Fav</h4>
             <FoodItem/>           
           </div>
          <div className="info">
             <Info/>
          </div>
    </div>
    )
}

export default Home