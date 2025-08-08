import { Link } from "react-router-dom"
import "./router.css"

const BlogItem=(props)=>{
 const {blogData}=props
 const {id,imageUrl,topic,tittle,avatarUrl,author}=blogData



 
            return(
                <Link to={`/blogs/${id}` }>
                    <div className="Item-container">
                        <img src={imageUrl} alt={`item${id}`}/>
                        <div className="item-info">
                            <p>{topic}</p>
                            <p>{tittle}</p>
                            <div className="author-info">
                                <img src={avatarUrl} alt={`item${id}`}/>
                                <p>{author}</p>
                            </div>

                        </div>
                    </div>
                </Link>
                
            )
        

}    
    
       

       



export default BlogItem