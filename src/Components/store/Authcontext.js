
import React,{useState} from "react";

const Authcontext=React.createContext({
    token:"",
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}

})

export const AuthContextProvider=(props)=>{
  const intialtoken=localStorage.getItem("token")
   const[token,setToken]=useState(intialtoken)

   const userIsLoggedIn=!!token;

   const loginHandler=(token)=>{
    localStorage.setItem("token",token)
    setToken(token)
   }

   const logoutHandler=()=>{
    setToken(null)
    localStorage.removeItem("token")
   }

   const contextvalue={
     token:token,
     isLoggedIn:userIsLoggedIn,
     login:loginHandler,
     logout:logoutHandler,
   }

    return <Authcontext.Provider value={contextvalue}>
        {props.children}</Authcontext.Provider>
}

export default Authcontext