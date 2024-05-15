 import {useContext} from "react"
 import React,{useState,useRef} from "react"
 import classes from "./Authform.module.css"
 import cartcontext from "../Store/cart-context"
 import {useNavigate} from "react-router-dom"
 const Authform=()=>{

    const cartctx=useContext(cartcontext)
    console.log(cartctx)
    const[isLogin,setisLogin]=useState(true)
    const[isLoading,setisLoading]=useState(false)
    const navigate=useNavigate()
    const authswitchHandler=()=>{
        setisLogin((prevstate)=>!prevstate)
    }
    const inputemail=useRef();
    const inputpassword=useRef();

    const submithandler=(event)=>{
         event.preventDefault()
         const enteredemail=inputemail.current.value;
         const enteredpassword=inputpassword.current.value;
         setisLoading(true)

         let url;
         if(isLogin){
          url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDLedg5jzm00E9kPND4FG9kuKewUFMNOtY"
         }else{
          url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLedg5jzm00E9kPND4FG9kuKewUFMNOtY"

         }
          fetch(url,{
            method:"POST",
            body:JSON.stringify({
                email:enteredemail,
                password:enteredpassword,
                returnSecureToken:true,
            }),
            headers:{
               "Content-Type":"application/json"
              }

          }).then(res=>{
            setisLoading(false)
            if(!res.ok){
                return res.json().then(data=>{
                    throw new Error(data.error.message)
                })
            }
            return res.json()

          }).then(data=>{
           // setisLoading(false)        choice
           // console.log(data)
           const Email=enteredemail.replace("@","").replace(".","")
            cartctx.login(data.idToken,Email)
            navigate("/")
          }).catch(error=>{
            alert(error.message)
          })
         }
    
    return(
        <div className={classes.auth}>
          <form className={classes.authbody} onSubmit={submithandler}>
           
               <h1>{isLogin ? "Login":"Sign up"}</h1>
                <div>
                <label>Your Email</label>
                <input type="email" ref={inputemail}/>
                </div>
                <div>
                <label>Your Password</label>
                <input type="password" ref={inputpassword}/>
                </div>
                <div>
              {!isLoading && <button className={classes.button}
                > {isLogin ?"Login":"Create account"}</button>}
              {isLoading && <p>Sending request...</p>}
                </div>
                <div><button className={classes.button2} type="button" onClick={authswitchHandler}
                > {isLogin ? "Create new account":"Login with existing account"}</button>
                </div>
              
            </form>
        </div>
    )
 }
 export default Authform