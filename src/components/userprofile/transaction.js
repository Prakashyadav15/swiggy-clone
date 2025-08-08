import "./money.css"
const Transcation =props=>{
    const {details,ondelete}=props
    const {id,title,amount,type}=details
    const handleDelete=()=>ondelete(id)

    return(
        <li>
            <span>{title}</span>
            <span>{amount}</span>
            <span>{type}</span>
            <button onClick={handleDelete}><img src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png" className="del" alt="delete"/></button>
        </li>
    )
}
export default Transcation