import {Component} from "react"
import "./ithdraw.css"
class Withdraw extends Component{

    state={count:2000}

    withdraw50=()=>{
        this.setState((prevstate)=>({
            count:prevstate.count-50
        }))
    }
    withdraw100=()=>{
        this.setState((prevstate)=>({
            count:prevstate.count-100
        }))
    }
    withdraw200=()=>{
        this.setState((prevstate)=>({
            count:prevstate.count-200
        }))
    }
    withdraw500=()=>{
        this.setState((prevstate)=>({
            count:prevstate.count-500
        }))
    }

    render(){
        const {count}=this.state
        return(
            
            <div className="bg">

                <div className="bgg">
                    <div className="bgname">
                        <h1>S</h1>
                    </div>
                    <div className="name">
                        <h1>Sarah Williams</h1>
                    </div>
                    
                </div>
                <div className="balance">
                    <div>
                        <h1 className="Your"> Your Balance</h1>
                    </div>
                    <div className="col">
                        <h1 className="number">{count}</h1>
                        <p className="your"> In Rupees</p>
                    </div>
                </div>
                <h1 className="number">Withdraw</h1>
                <p className="your">CHOOSE SUM(IN RUPESS)</p>
                <div className="buttons">
                    <button className="but" onClick={this.withdraw50}> 50</button>
                    <button className="but" onClick={this.withdraw100}> 100</button>
                    <button className="but" onClick={this.withdraw200}> 200</button>
                    <button className="but" onClick={this.withdraw500}> 500</button>
                </div>
            </div>
        )
    }
}
export default Withdraw