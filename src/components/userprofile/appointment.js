import { Component } from "react";
import {v4 as uuidv4} from "uuid";
import "./appointmnet.css"
class Appointment extends Component{
    state={
        Tittle:"",
        Date:"",
        appointmentlist:[]
    }

    tittle=(event)=>{
        this.setState({Tittle:event.target.value})
    }
    date=(event)=>{
        this.setState({Date:event.target.value})
    }
    add=()=>{
        const {Tittle,Date}=this.state;
        if(Tittle!=="" && Date !==""){
            const newappointment={
                id:uuidv4(),
                Tittle,
                Date,
                isfav:false,
            }
            this.setState((prev)=>({
                appointmentlist:[...prev.appointmentlist,newappointment],
                Tittle:"",
                Date:""
            }))
        }
    }

    fav=(id)=>{
        this.setState((prev)=>({
            appointmentlist:prev.appointmentlist.map((item)=>{
              return  item.id===id?{...item,isfav:!item.isfav}:item
            })
        }))
    }
    
  
    

    render(){
        const{Tittle,Date,appointmentlist}=this.state
        
        return(
            <div className="back">
                <div className="cont">
                    <h1>Add Appointment</h1>
                    <div className="form">
                        
                            <div>
                                <label className="lab" for="intTittle">TITTLE</label>
                                <input type="text" onChange={this.tittle} value={Tittle} placeholder="tittle" id="intTittle" className="intputT"></input>
                            </div>
                             <div>
                                <label className="lab" for="intdate">DATE</label>
                                <input type="date" onChange={this.date} value={Date} placeholder="dd/mm/yy" id="intdate" className="intputT"></input>
                            </div>
                            <button className="butstyle" onClick={this.add}>Add</button>
                        
                    </div>
                    <div>
                        <img src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png" alt="appointment"/>
                    </div>
                    <hr/>
                    <div className="starcont">
                       <div> <h2>Appoinment</h2></div>
                       <div>
                        <button className="starred" onclick={this.starred}>starred</button>
                       </div>
                    </div>
                    <ul>
                        {appointmentlist.map((app)=>
                        <li key={app.id} value={app}>
                            <p><storng>{app.Tittle}</storng>
                            </p>
                            <button onClick={()=>{this.fav(app.id)}}>
                                <img src={
                                    app.isfav?"https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png":"https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png" 
                                }/>
                            </button>
                            <div>
                                <p>{app.Date}</p>
                            </div>
                            </li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Appointment