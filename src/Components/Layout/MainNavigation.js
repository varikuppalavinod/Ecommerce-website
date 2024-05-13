import {useContext} from "react"
import Authcontext from "../store/Authcontext"
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';


const MainNavigation = () => {

  const authctx=useContext(Authcontext)
  const isLoggedIn=authctx.isLoggedIn

  const logouthandler=()=>{
    authctx.logout()
    
    //redirect the user to login page
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
        
        {!isLoggedIn && (<li> <Link to='/auth'>Login</Link></li>)}

        {isLoggedIn &&( <li> <Link to='/profile'>Profile</Link></li>)}

         {isLoggedIn && ( <li><button onClick={logouthandler}>Logout</button></li>)}

        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;