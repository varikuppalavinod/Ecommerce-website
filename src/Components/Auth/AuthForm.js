//implementing login using firebase
//using context api managed tokens

import { useState, useRef,useContext } from 'react';
import classes from './AuthForm.module.css';
import authcontext from "../store/Authcontext"
import {useNavigate} from "react-router-dom"

const AuthForm = () => {
  
  
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authctx=useContext(authcontext)
  console.log("this is authform",authctx)

  const navigate=useNavigate()
  console.log(navigate)

  const switchAuthModeHandler = () => {
    setIsLogin(prevState => !prevState);
  };

  const submitHandler = event => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    let url;
    if (isLogin) {
      // Sign in URL
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDLedg5jzm00E9kPND4FG9kuKewUFMNOtY";
    } else {
      // Sign up URL
      url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDLedg5jzm00E9kPND4FG9kuKewUFMNOtY";
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      setIsLoading(false)
      if (!res.ok) {
        return res.json().then(data => {
          throw new Error(data.error.message);

        });
      }
      return res.json();
    })
    .then(data => {

      authctx.login(data.idToken)
      navigate("/")              //navigate path is changed after login 
      
     // console.log(data); // Assuming your backend returns a token
      setIsLoading(false);
    })
    .catch(error => {
      alert(error.message);
      
    });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' autoComplete='off' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' autoComplete='off' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending request ...</p>}
          <button type='button' className={classes.toggle} onClick={switchAuthModeHandler}>
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;


/*
import { useState,useRef} from 'react';
import classes from './AuthForm.module.css';
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const[isLoading,setisLoading]=useState(false)
  const emailInputRef=useRef()
  const passwordInputRef=useRef()

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
   const submithandler=(event)=>{
      event.preventDefault()
      const enteredEmail=emailInputRef.current.value;
      const enteredPassword=passwordInputRef.current.value;

      setisLoading(true)
      let url;
if(isLogin){
  url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyDLedg5jzm00E9kPND4FG9kuKewUFMNOtY"
}else{
 url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyDLedg5jzm00E9kPND4FG9kuKewUFMNOtY"
  fetch(url,{     
 
     method:"POST",
     body:JSON.stringify({
      email:enteredEmail,
      password:enteredPassword,
      returnSecureToken:true,
     
     }),
     headers: {
      "Content-Type":"application/json"
     }
     
     }
 ).then(res=>{
  setisLoading(false)
  if(res.ok){
    //return res.json();
    //...
  }else{
    res.json().then(data=>{
      //show an error model
      console.log(data);
      let errorMessage="Authentication failed"
      if(data&& data.error&&data.error.message){
        errorMessage=data.error.message;
      }
      alert(errorMessage)
    })
  }
 })
}
   }

  return (
    <section className={classes.auth} >
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submithandler} >
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email'  autoComplete="off" 
          required  ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            autoComplete="off"
            required  ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
        {!isLoading && <button>{isLogin ? "Login" :"Create Account"}</button>}
        {isLoading&&<p>Sending request ...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};
export default AuthForm;
*/