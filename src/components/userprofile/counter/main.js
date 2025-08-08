import {Component} from 'react'
import "./main.css"

class Back extends Component{
    state={isdarkmode:true}
    
    
    change=()=>{
        this.setState((prevstate)=>({
            isdarkmode: !prevstate.isdarkmode
        }))
    }

    render(){
        const {isdarkmode}=this.state
        return(
           
                <div className={isdarkmode?"container light":"container dark"}>
                    <h1 className={isdarkmode?"black":"white"}>change the background</h1>
                    <button onClick={this.change}>{isdarkmode?" light mode":"dark mode"}</button>
                </div>

            
            
        )
    }
}


export default Back