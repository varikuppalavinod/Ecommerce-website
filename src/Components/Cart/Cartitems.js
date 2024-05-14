import {useContext} from "react"
import cartcontext from "../Store/cart-context"
import{Button} from "react-bootstrap"
import classes from "./Cartitems.module.css"
const Cartitems=(props)=>{
  const cartctx=useContext(cartcontext)

  const removehandler=(id)=>{
    cartctx.removeitem(props.id)
  }
  return(

    <div className={classes.container}>
     <div className={classes.row}>
     <div className={classes.col}> 
     {props.image}
     {props.title}
     </div>
      <div className={classes.col}>{props.price}</div>
     <div >
      {props.quantity}
     <Button variant="info" onClick={removehandler}>remove</Button></div> 
     
     </div>

    </div>
  )
}
export default Cartitems

// <div className={classes.col}>{props.quantity}