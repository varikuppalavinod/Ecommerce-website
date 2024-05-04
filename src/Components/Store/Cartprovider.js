import {useReducer} from "react"
import Cartcontext from "./cart-context"

const CartProvider=(props)=>{
  const defaultcartstate={
    items:[],
    totalAmount:0
  }

  const cartreducer=(state,action)=>{
    console.log("cartproviderr",action.item)
    if(action.type==="ADD"){
      // const updateditems=state.items.concat(action.item)
       const updatedamount=state.totalAmount+action.item.price*action.item.amount

       const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updateditems;
  
      if (existingCartItem) {
        const updateditem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updateditems = [...state.items];
        updateditems[existingCartItemIndex] = updateditem;
      } else {
        updateditems = state.items.concat(action.item);
      }
       return {
        items:updateditems,
        totalAmount:updatedamount,
       }
    }
    return defaultcartstate
  }

  const[cartitems,dispatchcartaction]=useReducer(cartreducer,defaultcartstate)

    const addItemToCartHandler=(item)=>{
      //console.log("cartprovider",item)
          dispatchcartaction({type:"ADD",item:item})
    }

    const removeItemFromCartHandler=(id)=>{
         dispatchcartaction({type:"REMOVE",id:id})
    }

    const cartcontext={
      items:cartitems.items,
      totalAmount:cartitems.totalAmount,
      additem:addItemToCartHandler,
      removeItem:removeItemFromCartHandler,
    }
    return(
        <Cartcontext.Provider value={cartcontext}>
        {props.children}
        </Cartcontext.Provider>
    )
}
export default CartProvider;