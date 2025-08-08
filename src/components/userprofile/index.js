
const Userprofile=(props)=>{
    const {cont}=props
    const {header,description}=cont
  return  (
    <li className="container">
      <h1 className="head">{header}</h1>
      <p className="pa">{description}</p>
      <button className="but">view</button>
    </li>
)
}
export default Userprofile