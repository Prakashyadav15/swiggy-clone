import { Component } from "react";


const countrylist=[
    {
        id:"New Delhi",
        capital:"New Delhi",
        country:"India"
    },
    {
        id:"paris",
        capital:"paris",
        country:"France"
     },
      {
        id:"Tokyo",
        capital:"Tokyo",
        country:"Japan"
    },
     {
        id:"Brasília",
        capital:"Brasília",
        country:"Brazil"
    }, 
    {
        id:"Canberra",
        capital:"Canberra",
        country:"Australia"
    }
]

class Capital extends Component{
    state={
       selectedid:countrylist[0].id
    }

    onchangeCap=(event)=>{
        this.setState({selectedid:event.target.value})
    }
    getcountry=()=>{
        const {selectedid}=this.state
        const capitaldata=countrylist.find(cap=>cap.id===selectedid)
            return capitaldata.country
    }
    
    

    render(){

        const {selectedid}=this.state
        const getdetails=this.getcountry()
        return(
            <div className="blue">
                <div className="whitecont">
                    <h1 className="head">Countries And Capitals</h1>
                    <div className="drop">
                        <select className="dropdown" onChange={this.onchangeCap} value={selectedid}>
                           {countrylist.map((each)=>(<option key={each.id} value={each.id}>{each.capital}</option>
                          ) )} 
                        </select>
                        <span className="label">is capital of which country?</span>
                       
                        

                    </div>
                     <h2 className="country-name">{getdetails}</h2>

                </div>
            </div>

        )
    }






}
export default Capital