import { Component } from "react";
import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import BlogItem from "./blog";

class BlogList extends Component{
state={isloader:true ,blogsdata:[]}
    componentDidMount(){
        this.getBlogsData()
    }
    
    getBlogsData=async()=>{
        const response=await fetch('https://apis.ccbp.in/blogs')
        const statuscode= await response.statuscode
        console.log(statuscode)
        const data= await response.json()

        const formatdata=data.map(eachItem=>({
            id: eachItem.id,
            title: eachItem.title,
            imageUrl: eachItem.image_url,
            avatarUrl: eachItem.avatar_url,
            author: eachItem.author,
            topic: eachItem.topic,
        }))
        this.setState({blogsdata:formatdata,isloader:false})

    }
    render(){
        const {blogsdata,isloader}=this.state
        console.log(isloader)
        return(
            <div>
                {isloader? (<Loader type="TailSpin" color="#00BFFF" height={50} width={50} />):

                (blogsdata.map(item=><BlogItem  blogData={item} key={item.id} />))
                }
            </div>
        )
    }

}
export default BlogList