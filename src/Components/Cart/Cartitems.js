//import Modal from "../UI/Modal"
import {Button,Container,Row,Col} from 'react-bootstrap'
const Cartitems=(props)=>{
    return(
        <Container>
      <Row>
        <Col> {props.image}
        {props.title}</Col>
        <Col style={{marginLeft:"7rem"}}> {props.price}</Col>
        <Col style={{marginLeft:"5rem"}}> {props.quantity}
        <Button variant="info">REMOVE</Button></Col>
      </Row>
    </Container>
      
    )
}
export default Cartitems
