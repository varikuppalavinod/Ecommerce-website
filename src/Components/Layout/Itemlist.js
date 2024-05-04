import {useContext} from "react"
import ItemForm from "./ItemForm"
//import {Button} from 'react-bootstrap'
//import classes from"./Items.module.css"
import cartcontext from "../Store/cart-context"
const Itemlist=(props)=>{
    const cartctx=useContext(cartcontext)
    console.log("this is itemlist",cartctx)
    const addToCartHandler=(amount)=>{
        cartctx.additem({
            id:props.id,
            name:props.title,
            amount:amount,
            price:props.price,
            image:props.image,
        })
       
    }
 return(
    <div>
       
        <div>{props.title}</div>
        <div><img src={props.image} alt={props.title}/></div>
        <div>{props.price}</div>
       
        <div>
            <ItemForm id={props.id} onAddToCart={addToCartHandler}/>
        </div>
    </div>
 )
}
export default Itemlist