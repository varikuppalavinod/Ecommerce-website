import{useContext} from "react"
import React, { useState} from "react";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import Home from "./Components/Maincomponent/Home";
import About from "./Components/Maincomponent/About";
import Store from "./Components/Maincomponent/Store";
import Header from "./Components/Layout/Header";
import Authform from "./Components/Auth/Authform";
import cartcontext from "./Components/Store/cart-context"



const App = () => {
  const cartctx=useContext(cartcontext)
  console.log("this is app js",cartctx)
  const isLoggedIn=cartctx.isLoggedIn
  console.log(isLoggedIn)
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    
    <BrowserRouter>
      <Header onShowCart={showCartHandler}  />
      <Routes>
      {isLoggedIn && <Route path="/" element={<Store onCloseCart={hideCartHandler} cartItems={showCart}/>} />}
       {isLoggedIn && <Route path="/home" element={<Home  />}/>}
       {isLoggedIn && <Route path="/about" element={<About />}/>}
        <Route path="/login" element={<Authform/>}/>
        <Route path="*" element={<Navigate to ="/login"/>}/>
      </Routes>
    </BrowserRouter>
    
  );
};

export default App;


/*
import Store from "./Components/Maincomponent/Store"
import{BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./Components/Maincomponent/Home"
import About from "./Components/Maincomponent/About"
//import Navbar from "./Components/Maincomponent/Navbar"
import Header from "./Components/Layout/Header"
//import {useState} from "react"
const App=()=>{
  
   return(
    <BrowserRouter> 
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>

    </BrowserRouter>
   )
}
export default App

/*
import Cart from "./Components/Cart/Cart"
import React,{useState} from "react";
import Availableitems from "./Components/Layout/Availableitems";
import Cartprovider from "./Components/Store/Cartprovider"
import Header from "./Components/Layout/Header"
const App=()=> {

const[showcart,setshowcart]=useState(false)

const showcarthandler=()=>{
    setshowcart(true)
}
const hidecarthandler=()=>{
        setshowcart(false)
}
  return(
     
    < Cartprovider>
    <Header onShowCart={showcarthandler}/>
     {showcart&&<Cart onClose={hidecarthandler} onShowCart={showcarthandler}/>}
     <Availableitems/>
    </ Cartprovider>
    
  )
}
export default App;
/*
import AlertExample from "./Practice/AlertExample"
const App=()=>{
  return(
    <div>
      <AlertExample/>
    </div>
  )
}
export default App
*/