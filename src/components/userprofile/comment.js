import { Component } from "react";
import "./comment.css"
class Comment extends Component{

    state={
      peru:"" ,    
      comment:"",
      commentlist:[],  
         
    }

    changename=(event)=>{
        this.setState({ peru:event.target.value  })

    }
    textinbox=(event)=>{
        this.setState({comment:event.target.value})
    }
    addcomment=()=>{
        const{peru,comment}=this.state
        if(peru !=="" && comment !==""){
            const newcomment={
                id:Date.now(),
                peru,
                comment,
                isliked:false,
            }
            this.setState((prevstate)=>({
               commentlist:[...prevstate.commentlist,newcomment],
               peru:"",
               comment:"",
            }))
        }
    }

    liked=(id)=>{
       
        
        this.setState((prev)=>({
            commentlist:prev.commentlist.map((item)=>
            item.id===id?{...item,isliked:!item.isliked}:item
        )
        }))
    }

    delete=(id)=>{
        this.setState((prev)=>({
            commentlist:prev.commentlist.filter((item)=>item.id !==id)
        }))
    }



render(){
    const{peru,comment,commentlist}=this.state

    return(
        <div className="cont">
            <h1>Comments</h1>
            <div className="section">
                <p>Say something about 4.0 Technologies</p>
                <input type="text" placeholder="Your name" value={peru} onChange={this.changename}/>
                <textarea rows="5" cols="60"   placeholder="Your name" value={comment} onChange={this.textinbox}></textarea>
                <button className="but" onClick={this.addcomment} >Add Comment</button>

            </div>
            <div >
                <img src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" className="img" alt="comment"/>
            </div>
            <hr/>
            <div className="count">
                <p className="blue">{commentlist.length}</p>
                <p>comments</p>

            </div>
            <ul>
                {commentlist.map((item)=>(
                    <li key={item.id} className="listed">
                        <p className="letter">{item.peru[0]} <strong>{item.peru}</strong></p>
                        <p>{item.comment}</p>
                        <div >
                            <button className="butt" onClick={()=>this.liked(item.id)}>
                                <img src={
                                    item.isliked?"https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png":"https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
                                }/></button> 
                       </div>
                       <button onClick={()=>this.delete(item.id)}><img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" className="imgdelete" alt="delete"/></button>
                    </li>
                ))}
            </ul>

      

            
        </div >
    )
}

}
export default Comment