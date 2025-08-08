import "./money.css"
const Moneydetails=props=>{
    const {balance, income, expenses}=props
    
    return(
       <div className="moneydet">
         <div className="cont-balance">
            <div className="imgbal">
                <img src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png" className="img" alt="balance"/>

            </div>
            <div>
                <p>your balance</p>
                <p><strong>Rs {balance}</strong></p>
            </div>
        </div>
         <div className="cont-income">
            <div className="imgbal">
                <img src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png" className="img" alt="income"/>

            </div>
            <div>
                <p>your income</p>
                <p><strong>Rs {income}</strong></p>
            </div>
        </div>
         <div className="cont-expenses">
            <div className="imgbal">
                <img src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png" className="img" alt="expenses"/>

            </div>
            <div>
                <p>your expenses</p>
                <p><strong>Rs {expenses}</strong></p>
            </div>
        </div>
       </div>
    )
     
}
export default Moneydetails