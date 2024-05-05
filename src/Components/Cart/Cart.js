import {useContext} from "react"
import Cartitems from "./Cartitems"
import Modal from "../UI/Modal"
import cartcontext from "../Store/cart-context"

/*
const cartElements = [
    {
    id:"1",
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
    },
    {
    id:"2",
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
    },
    {
    id:"3",
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
    }
    ]

   // const cartctx=useContext(cartcontext)
    //console.log(cartctx)
 */
    
   
    const Cart=(props)=>{
        const cartctx=useContext(cartcontext)
        console.log("this is cart",cartctx)
        
        const cartlist=cartctx.items.map((items)=><Cartitems 
        key={items.id}
        title={items.name}
        price={items.price}
        quantity={items.amount}
        image={<img src={items.image} alt="itemimage"/>}
       ></Cartitems>)
        return(
            <div>
            <Modal onClick={props.onClose}>
            {cartlist}
         </Modal>
         
         </div>
        )
    }
    export default Cart

    