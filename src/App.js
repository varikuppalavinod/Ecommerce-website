import Cart from "./Components/Cart/Cart"
import React,{useState} from "react";
import Productsscreen from "./Components/Layout/Productsscreen";
const App=()=> {

const[showcart,setshowcart]=useState(false)

const showcarthandler=()=>{
    setshowcart(true)
}
const hidecarthandler=()=>{
        setshowcart(false)
}
  return(
    <div>
    <div>
     {showcart&&<Cart onClose={hidecarthandler}/>}
      <Productsscreen onShowCart={showcarthandler}/>
    </div>
    </div>
  )
}
export default App;
