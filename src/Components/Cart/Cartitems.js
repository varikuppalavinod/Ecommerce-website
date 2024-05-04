//import Modal from "../UI/Modal"
/*
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
*/
import{Button} from "react-bootstrap"
import classes from "./Cartitems.module.css"
const Cartitems=(props)=>{
  return(

    <div className={classes.container}>
     <div className={classes.row}>
     <div className={classes.col}> 
     {props.image}
     {props.title}
     </div>
      <div className={classes.col}>{props.price}</div>
     <div >
      {props.quantity}
     <Button variant="info">remove</Button></div> 
     
     </div>

    </div>
  )
}
export default Cartitems

// <div className={classes.col}>{props.quantity}