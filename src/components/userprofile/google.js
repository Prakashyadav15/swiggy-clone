import { Component } from "react";

import "./google.css"
class Google extends Component{
    history=[
        "Price of Ethereum",
      "Oculus Quest 2 specs",
      "Tesla Share Price",
      "Price of Ethereum today",
      "Latest trends in AI",
      "Latest trends in ML",
    ]

    state={
        searchInput:"",
        searchHistory:this.history
    }
    
    changedinput=(event)=>{
        this.setState({searchInput:event.target.value})
    }

    getfilteredsearchlist=()=>{
        const { searchInput,searchHistory}=this.state;
        return searchHistory.filter((item)=>
        item.toLowerCase().includes(searchInput.toLowerCase())
        )
    }
    arrow=(item)=>{
        this.setState({searchInput:item})
    }


    render(){
         const {searchInput}=this.state
         const filtersearchHistory=this.getfilteredsearchlist()

        return(
            <div className="googleimg">
                <img src="https://assets.ccbp.in/frontend/react-js/google-logo.png" className="img"/>
                <div className="searchcont">
                    <div className="iconcont">
                         <img src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png" className="icon"/>
                        <input type="text" value={searchInput} onChange={this.changedinput} className="int" />
                    </div>
                    <ul className="orderlist">
                        <div className="listdiv">
                            {filtersearchHistory.map((item,index)=>(
                            <li key={index} className="list">{item}
                           <button className="but" onClick={()=>this.arrow(item)}><img src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png" className="arr"/>
                            </button> </li>))}
                        
                            
                        </div>

                        
                    </ul>
                </div>

            </div>
        )
    }
}
export default Google