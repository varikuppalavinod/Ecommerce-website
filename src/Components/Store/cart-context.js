import React from "react"

const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    additem:(item)=>{},
    removeitem:(id)=>{},

    token:'',
    isLoggedIn:(token)=>{},
    login:(token)=>{},
    logout:()=>{},
    
})
export default CartContext;