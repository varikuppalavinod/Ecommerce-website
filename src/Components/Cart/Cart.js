import Cartitems from "./Cartitems"
import Modal from "../UI/Modal"
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
   const cartlist=cartElements.map((items)=><Cartitems 
     key={items.id}
     title={items.title}
     price={items.price}
     image={<img src={items.imageUrl} alt="itemimage"/>}
     quantity={items.quantity}></Cartitems>)
    
   
    const Cart=(props)=>{
        return(
            <Modal onClick={props.onClose}>
            {cartlist}
         </Modal>
        )
    }
    export default Cart