import {Navbar,Container,Button,Row,Col} from 'react-bootstrap'
import {useContext} from "react"
import cartcontext from "../Store/cart-context"


const Header=(props)=>{
  const cartctx=useContext(cartcontext)
  console.log(" this is Header",cartctx)

  const totalitems=cartctx.items.reduce((currno,item)=>{
      return  currno+item.amount 
     },0)
//const totalitems=cartctx.items.length
  return(
    <div>
      <div style={{position:"fixed", width:"100%" ,zIndex:"100"}}>
     <Navbar  bg="dark" expand="sm" variant="dark" grid="flex">
        <Container>
            <center>
            <Navbar.Brand>Home</Navbar.Brand>
              <Navbar.Brand>Store</Navbar.Brand>
                <Navbar.Brand>About</Navbar.Brand>
                </center>
                 <Button variant="outline-light" onClick={props.onClick}>cart : {totalitems}</Button>{' '}
                      
        </Container>
        

     </Navbar>
     </div>
     <div  style={{paddingTop:"55px"}}>
     <Container fluid className= "bg-secondary p-5">
      <Row>
        <Col><h1 className="text-white text-center">The Generics</h1></Col>
      </Row>
    </Container>
    </div>
    
    </div>
  )
}
export default Header

/*
<Container fluid className= "bg-secondary p-5  border border-white">
      <Row>
        <Col><h1 className="text-white text-center">The Generics</h1></Col>
      </Row>
    </Container>
    */