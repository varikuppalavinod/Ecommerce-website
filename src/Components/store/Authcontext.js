
import React,{useState,useEffect} from "react";

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


   //auto logout

   
  // Auto logout after 5 minutes of inactivity
  useEffect(() => {
    const logoutTimer = setTimeout(() => {
      logoutHandler();
      alert("please login again")
    }, 1 * 60 * 1000); // 5 minutes in milliseconds
    

    return () => {
      clearTimeout(logoutTimer);
    };
  }, [token]); // Reset timer whenever token changes


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