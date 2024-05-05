// Store.js
import React, { useContext } from "react";
import Availableitems from "../Layout/Availableitems";
import Cart from "../Cart/Cart";
//import Cartprovider from "../Store/Cartprovider";

const Store = (props) => {
  return (
    <div>
      {props.cartItems && <Cart onClose={props.onCloseCart} />}
      <Availableitems />
      </div>
  );
};

export default Store;


/*
import Cart from "../Cart/Cart"
import React,{useState} from "react";
import Availableitems from "../Layout/Availableitems";
import Cartprovider from "../Store/Cartprovider"
//import Header from "../Layout/Header"
const Store=()=> {

const[showcart,setshowcart]=useState(false)



const hidecarthandler=()=>{
        setshowcart(false)
}
  return(
     
    < Cartprovider>
    
     {showcart&&<Cart onClose={hidecarthandler}/>}
     <Availableitems/>
    </ Cartprovider>
    
  )
}
export default Store;
*/