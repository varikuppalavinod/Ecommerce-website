/*
import ReactDOM from "react-dom"
import classes from "./Modal.module.css"

const ModalOverlay=(props)=>{
  return(
    <div className={classes.modal}>
     <div className={classes.content}>{props.children}</div>
    </div>
  )
}
const portalelement=document.getElementById("overlay")
const Modal=(props)=>{
  return(
    <div>
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalelement)}
    </div>
  )
}
export default Modal
*/
import {Button} from 'react-bootstrap'
import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";


const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
       
        <div style={{position:"absolute",top:"10px",right:"0px", marginTop:"10px",marginBottom:"10px"}}><button onClick={props.onClick}>X</button></div>
        <div style={{ fontSize:"1.5rem", fontWeight:"bold", marginBottom: "10px",marginTop:"40px" }}>
          <span style={{ marginRight: "10rem" }}>Item</span>
          <span style={{ marginRight: "10rem" }}>Price</span>
          <span>Quantity</span>
        </div>
       
        {props.children}
      </div>
      <div>
      <h2 style={{position:"absolute",right:"60px",fontStyle:""}}>Total :$200</h2>
      </div>
      <div style={{display:"flex",justifyContent:"center",marginTop:"70px"}}>
      <Button variant="info">PURCHASE</Button>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlay")
const Modal = (props) => {
  return ReactDOM.createPortal(
    <ModalOverlay onClick={props.onClick}>{props.children}</ModalOverlay>,
    portalElement
  );
};

export default Modal;
