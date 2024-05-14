/*
import {useReducer,useState,useCallback,useMemo} from "react"
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

    const addItemToCartHandler=useCallback((item)=>{
      //console.log("cartprovider",item)
          dispatchcartaction({type:"ADD",item:item})
    },[])

    const removeItemFromCartHandler= useCallback((id)=>{
         dispatchcartaction({type:"REMOVE",id:id})
    },[])

    // implementing login and logout
    const[token,setToken]=useState(null)

    const UserIsLoggedIn=!!token

    const loginHandler=useCallback((token)=>{
      setToken(token)
    },[])
         
    const logoutHandler=useCallback(()=>{
      setToken(null)
    },[])
        

    const cartcontext= useMemo(()=>({
      items:cartitems.items,
      totalAmount:cartitems.totalAmount,
      additem:addItemToCartHandler,
      removeitem:removeItemFromCartHandler,

      token:token,
      isLoggedIn:UserIsLoggedIn,
      login:loginHandler,
      logout:logoutHandler,
    }),[])
    return(
        <Cartcontext.Provider value={cartcontext}>
        {props.children}
        </Cartcontext.Provider>
    )
}
export default CartProvider;
/*

import React, { useReducer, useState, useCallback, useMemo } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
  const [token, setToken] = useState(null);

  const addItemToCartHandler = useCallback((item) => {
    dispatchCartAction({ type: "ADD", item: item });
  }, []);

  const removeItemFromCartHandler = useCallback((id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  }, []);

  const loginHandler = useCallback((token) => {
    setToken(token);
  }, []);

  const logoutHandler = useCallback(() => {
    setToken(null);
  }, []);

  const userIsLoggedIn = !!token;

  const cartContext = useMemo(
    () => ({
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler,
      token: token,
      isLoggedIn: userIsLoggedIn,
      login: loginHandler,
      logout: logoutHandler,
    }),
    [cartState, addItemToCartHandler, removeItemFromCartHandler, token, userIsLoggedIn, loginHandler, logoutHandler]
  );

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
*/


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

    const UserIsLoggedIn=!!token

    const loginHandler=(token)=>{
      localStorage.setItem("token",token)
       setToken(token)
    }
        
    const logoutHandler=()=>{
      setToken(null)
    localStorage.removeItem("token")
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
    }
    return(
        <Cartcontext.Provider value={cartcontext}>
        {props.children}
        </Cartcontext.Provider>
    )
}
export default CartProvider;
