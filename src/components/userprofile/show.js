import { Component } from "react";

import "./show.css"
class Show extends Component{
    state={
        count:0
    }

    Generaterandom=()=>{
        const rand=Math.floor(Math.random()*100)
        this.setState({count:rand})
    }

    render(){
        const{count}=this.state
        return(
            <div className="bg">
                <div className="cont">
                    <h3>Random Number</h3>
                    <p>Generate a random number in file range of 0 to 100</p>
                    <button className="generate" onClick={this.Generaterandom}>Generate</button>
                    <h1 className="num">{count}</h1>
                </div>
            </div>
        )
    }
}
 export default Show