import {useRef,useContext} from "react"
import classes from './ProfileForm.module.css';
import Authcontext from "../store/Authcontext"
const ProfileForm = () => {
 const authctx=useContext(Authcontext)
  const newPasswordInputRef=useRef()
  
  const submitHandler=(event)=>{
      event.preventDefault()

      const enteredNewPassword=newPasswordInputRef.current.value;

      //add validation
      fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDLedg5jzm00E9kPND4FG9kuKewUFMNOtY",{
        method:"POST",
        body:JSON.stringify({
          idToken: authctx.token,
          password:enteredNewPassword,
          returnSecureToken:false,
        }),
        headers:{
          "Content-Type":"application/json"
        }
      }).then(res=>{
     //always succeed
      
      })
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLenth="7" ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;