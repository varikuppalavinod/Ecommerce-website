
import {useReducer,useState} from "react"
import Cartcontext from "./cart-context"

const CartProvider=(props)=>{
  const defaultcartstate={
    items:[],
    totalAmount:0
  }

  const cartreducer=(state,action)=>{
  //  console.log("cartproviderr",action.item)
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
   // return defaultcartstate
   if(action.type==="REMOVE"){
    const afterdeletingitems = state.items.filter((item) => item.id !== action.id);
    const updatedAmount = afterdeletingitems.reduce((acc, item) => acc + item.price * item.amount, 0);
    return {
      items: afterdeletingitems,
      totalAmount: updatedAmount
    };
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

    // implementing login and logout
    const intialtoken=localStorage.getItem("token")
    const[token,setToken]=useState(intialtoken)
    
    
    const[userEmail,setUseremail]=useState(null)

    const UserIsLoggedIn=!!token

    const loginHandler=(token,email)=>{
      localStorage.setItem("token",token)
       setToken(token)
       setUseremail(email)
    }
        
    const logoutHandler=()=>{
      setToken(null)
    localStorage.removeItem("token")
    setUseremail('')
   // setCartItems([])
    }
         
    const cartcontext={
      items:cartitems.items,
      totalAmount:cartitems.totalAmount,
      additem:addItemToCartHandler,
      removeitem:removeItemFromCartHandler,

      token:token,
      isLoggedIn:UserIsLoggedIn,
      login:loginHandler,
      logout:logoutHandler,
      userEmail:userEmail,
      
    }
    return(
        <Cartcontext.Provider value={cartcontext}>
        {props.children}
        </Cartcontext.Provider>
    )
}
export default CartProvider;


