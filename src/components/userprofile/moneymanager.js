import { Component } from "react";
import Moneydetails from "./moneydetails";
import Transcation from "./transaction"; 
import {v4 as uuidv4} from "uuid"
import "./money.css"

class Money extends Component{
    
    state={
        balance:0,
        income:0,
        expenses:0,
        title:"",
        amount:"",
        type:"income",
        transactionlist:[]

    }
    titlefortrans=(event)=>{
        this.setState({title:event.target.value})
    }
    amountfortrans=(event)=>{
        this.setState({amount:event.target.value})
    }
    typeofexpenses=(event)=>{
        this.setState({type:event.target.value})
    }
    addtolist=()=>{
        const {title,amount,type}=this.state
        const newtranscation={
            id:uuidv4(),
            title,
            amount:parseInt(amount),
            type,

        }
        this.setState((prev)=>{
            const income=type=="income"? prev.income + newtranscation.amount:prev.income
            const expenses=type=="expenses"? prev.expenses + newtranscation.amount:prev.expenses
            const balance=type=="income"? prev.balance+ newtranscation.amount: prev.balance- newtranscation.amount

            return{
               transactionlist:[...prev.transactionlist,newtranscation] ,
               income,
               expenses,
               balance,
               title:"",
               amount:"",
               type:"income"


            }
        
         })

    }
    deleteTransaction=(id)=>{
        this.setState((prev)=>{
            const removetrans=prev.transactionlist.find(trans=>trans.id ===id)
            let {income,expenses,balance}=prev
            if(removetrans.type="income"){
                income-=removetrans.amount
                balance-=removetrans.amount
            }else{
                expenses-=removetrans.amount
                balance+=removetrans.amount
            }

            return{
                transactionlist:prev.transactionlist.filter(trans=>trans.id!==id),
                income,
                balance,
                expenses
            }
        })
    }

    render(){
        const {title,amount,type,balance,expenses,income,transactionlist}=this.state
        return(
            <div className="main-bg">
                <div className="namecont">
                    <h1>Hi,Richard</h1>
                    <p>Welcome back to your <span>Money Manager</span></p>
                </div>
                <Moneydetails balance={balance} income={income} expenses={expenses}/>

                <div className="transactionDetails">
                    <div className="addtransaction">
                        <h1>Add Transaction</h1>
                        <div>
                             <lable className="lab" for="title">TITLE</lable>
                             <input className="input" id="title" type="text" placeholder="TITLE" value={title} onChange={this.titlefortrans}></input>
                        </div>
                        <div>
                             <lable className="lab" for="amount">AMOUNT</lable>
                             <input className="input" id="amount" type="text" placeholder="AMOUNT" value={amount} onChange={this.amountfortrans}></input>
                        </div>
                        <div>
                            <label className="lab" for="type">TYPE</label>
                            <select className="input"  value={type} onChange={this.typeofexpenses}>
                               <option value="income" >income</option>
                               <option value="expenses">expenses</option>
                            </select>
                        </div>
                        <button className="add" onClick={this.addtolist}>Add</button>

                    </div>
                    <div className="addtransaction">
                        <h1>History</h1>
                        <ul >
                            <li className="list"><strong> Title</strong>   <strong>     Amount</strong>    <strong>    Type</strong></li>
                            {transactionlist.map(tx => (
                                <Transcation key={tx.id} details={tx} ondelete={this.deleteTransaction} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Money