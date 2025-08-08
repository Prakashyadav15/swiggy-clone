import { Component } from "react";

import "./stopwatch.css"
class Stop extends Component{
    state={
        timer:0,
        
        intervalId:null,
        isrunning:false,
    }
   
    formattime=()=>{
        const {timer}=this.state
        const min=(Math.floor(timer/60))
        const sec=String(timer%60)
        return `${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`
    }
    start=()=>{
        const {isrunning}=this.state
        if(!isrunning){
            const intervalId=setInterval(()=>{
                this.setState((prev)=>({
                  timer:prev.timer+1
                }))
            },1000)
            this.setState({
                isrunning:true,
                intervalId:intervalId
            })
        }
    }
    stop=()=>{
        clearInterval(this.state.intervalId)
        this.setState({
            isrunning:false,
            intervalId:null
        })
    }
    reset=()=>{
        clearInterval(this.state.intervalId)
        this.setState({
            isrunning:false,
            intervalId:null,
            timer:0
    })
   
    }
    render(){
       
        return(
            <div className="background">
                <div className="stop">
                    <h4>Stopwatch</h4>
                    <div className="timercont">
                        <p><img src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png" alt="stopwatch"/><span>Timer</span></p>
                        <h1 className="" >{this.formattime()}</h1>
                        <div className="buttons">
                            <button className="butstart" onClick={this.start}>start</button>
                            <button className="butstop" onClick={this.stop}>stop</button>
                            <button className="butreset" onClick={this.reset}>reset</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Stop