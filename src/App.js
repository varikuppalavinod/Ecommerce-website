import Cart from "./Components/Cart/Cart"
import React,{useState} from "react";
import Availableitems from "./Components/Layout/Availableitems";
import Cartprovider from "./Components/Store/Cartprovider"
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
     {showcart&&<Cart onClose={hidecarthandler}/>}
      <Availableitems onShowCart={showcarthandler}/>
    </ Cartprovider>
    
  )
}
export default App;
