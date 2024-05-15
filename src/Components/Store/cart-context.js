import React from "react"

const CartContext=React.createContext({
    items:[],
    totalAmount:0,
    additem:(item)=>{},
    removeitem:(id)=>{},

    token:'',
    isLoggedIn:(token)=>{},
    login:(token,email)=>{},
    logout:()=>{},
    userEmail:null,
    
    
})
export default CartContext;