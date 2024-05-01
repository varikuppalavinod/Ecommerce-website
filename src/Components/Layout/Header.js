import {Navbar,Container,Button,Row,Col} from 'react-bootstrap'

const Header=()=>{
  return(
    <div>
     <Navbar  bg="dark" expand="sm" variant="dark" grid="flex">
        <Container>
            <center>
            <Navbar.Brand>Home</Navbar.Brand>
              <Navbar.Brand>Store</Navbar.Brand>
                <Navbar.Brand>About</Navbar.Brand>
                </center>
                 <Button variant="outline-light">cart : 6</Button>{' '}
                 
                 
        </Container>
     </Navbar>
     <Container fluid className= "bg-secondary p-5  border border-white">
      <Row>
        <Col><h1 className="text-white text-center">The Generics</h1></Col>
      </Row>
    </Container>
    </div>
  )
}
export default Header