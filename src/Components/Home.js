import {Link} from "react-router-dom"
import {Outlet} from "react-router-dom"
const Home=()=>{
    return(
        <div>
               <ul>
                <li><Link to="/profile">profile</Link></li>
                <li><Link to="/orders">orders</Link></li>
            </ul>
            <h1>This is Home component</h1>
            <h1>This is nested demo</h1>
             <Outlet/>

        </div>
    )
}
export default Home