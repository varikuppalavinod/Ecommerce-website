import Home from "./Components/Home"
import About from "./Components/About"
import Login from "./Components/Login"
import Orders from "./Components/Orders"
import Profile from "./Components/Profile"
import  "./App.css"
import{BrowserRouter,Routes,Route,Link} from "react-router-dom"

const App=()=>{
//routing concept
  return(
   <BrowserRouter>
   <div className="app">
    <Link to="/" className="link">Home</Link>
    <Link to="/about" className="link">About</Link>
    <Link to="/login" className="link">Login</Link>
   </div>

   <Routes>
    <Route path="/" element={<Home/>}>
      <Route path="orders" element={<Orders/>}/>
      <Route path="profile" element={<Profile/>}/>

    </Route>

    
    <Route path="/about" element={<About/>}/>
    <Route path="/login" element={<Login/>}/>
   </Routes>
   
   </BrowserRouter>
  )
}
export default App