import {Navbar,Container,Button,Row,Col} from 'react-bootstrap'

const Header=(props)=>{
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
                 <Button variant="outline-light" onClick={props.onClick}>cart : 6</Button>{' '}
                      
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