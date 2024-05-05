import classes from "./Navbar.module.css"
import {Link} from "react-router-dom"
const Navbar=()=>{
  return(
    <div className={classes.navbar}>
      

        <Link to="/"><h2>Home</h2></Link>
       <Link to="/store"><h2>Store</h2></Link>
       <Link to="/about"><h2>About</h2></Link>
        
    </div>
  )
}
export default Navbar