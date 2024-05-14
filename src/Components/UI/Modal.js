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
import {useContext} from "react"
import cartcontext from "../Store/cart-context"


const ModalOverlay = (props) => {
  const cartctx=useContext(cartcontext)
  console.log("this is modal",cartctx)
  const totalamount=cartctx.totalAmount
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
      <h2 style={{position:"absolute",right:"60px",fontStyle:""}}>Total :${totalamount}</h2>
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

/*
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import { useContext } from 'react';
import cartcontext from '../Store/cart-context';

const ModalOverlay = (props) => {
  const cartctx = useContext(cartcontext);
  const totalamount = cartctx.totalAmount;
  const [purchaseMessageVisible, setPurchaseMessageVisible] = useState(false);

  const handlePurchase = () => {
    // Perform purchase logic here...
    // For demonstration, let's just show the purchase message
    setPurchaseMessageVisible(true);
  };

  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        <div style={{ position: 'absolute', top: '10px', right: '0px', marginTop: '10px', marginBottom: '10px' }}>
          <button onClick={props.onClick}>X</button>
        </div>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px', marginTop: '40px' }}>
          <span style={{ marginRight: '10rem' }}>Item</span>
          <span style={{ marginRight: '10rem' }}>Price</span>
          <span>Quantity</span>
        </div>
        {props.children}
      </div>
      <div>
        <h2 style={{ position: 'absolute', right: '60px', fontStyle: '' }}>Total :${totalamount}</h2>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '70px' }}>
        <Button variant="info" onClick={handlePurchase}>
          PURCHASE
        </Button>
      </div>
      {purchaseMessageVisible && (
        <div className={classes.purchaseMessage}>Thanks for your purchase!</div>
      )}
    </div>
  );
};

const portalElement = document.getElementById('overlay');
const Modal = (props) => {
  return ReactDOM.createPortal(
    <ModalOverlay onClick={props.onClick}>{props.children}</ModalOverlay>,
    portalElement
  );
};

export default Modal;
*/