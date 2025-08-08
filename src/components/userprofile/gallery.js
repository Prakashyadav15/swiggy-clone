import { Component } from "react";
import "./gallery.css"

const imagesList = [
  {
    id: 0,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png",
    thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png",
    altText: "nature mountain with pond",
  },
  {
    id: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png",
    thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png",
    altText: "nature sunset",
  },
  {
    id: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png",
    thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png",
    altText: "nature mountain with ocean",
  },
  {
    id: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png",
    thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png",
    altText: "nature mountain with forest",
  },
  {
    id: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png",
    thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png",
    altText: "nature leaves",
  },
  {
    id: 5,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-tree-img.png",
    thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png",
    altText: "nature tree",
  },
  {
    id: 6,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png",
    thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png",
    altText: "nature waterfall",
  },
  {
    id: 7,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/nature-river-img.png",
    thumbnailUrl: "https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png",
    altText: "nature river",
  },
]

class Gallery extends Component{

    state={
        selected:0
    }

    changeimg=(id)=>{
        this.setState({selected:id})
    }
     render(){
        const{selected}=this.state
        const selectedimg=imagesList.find((img)=>img.id===selected)

        return(
            <div classsName="card">
                <img src={selectedimg.imageUrl} alt={selectedimg.altText}className="imgs"/>
                <h1>Nature Photography</h1>
                <p>Nature Photography by Prakash</p>
                <ul className="list">
                 {imagesList.map((image)=><li key={image.id} className="listed">
                    <img src={image.thumbnailUrl}
                    alt={image.altText}
                    className={`thumbnail-img${image.id===selectedimg? "select":""}`}  onClick={()=>this.changeimg(image.id)}/>
                   
                 </li>)}   
                </ul>

               

            </div>
        )
     }

}
export default Gallery