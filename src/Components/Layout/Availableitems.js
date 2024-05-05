
import React from 'react';
//import Header from "./Header"
import Itemlist from "./Itemlist"
import classes from"./Availableitems.module.css"
//import {Container, Row, Col,Button} from 'react-bootstrap'

const productsArr = [
  {
    id:"1",
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id:"2",
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id:"3",
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id:"4",
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];
const Availableitems=(props)=>{
  const products=productsArr.map((item)=>
    <Itemlist 
       key={item.id}
       id={item.id}
       title={item.title}
       price={item.price}
       image={item.imageUrl}>

       </Itemlist>
  )
  return(
    <div>
     <div className={classes.generics}>
      <h1>GENERICS</h1>
      </div>
      <div className={classes.music}><h1>MUSIC</h1></div>
      <div className={classes.grid}>
      {products}
      </div>
      <footer className={classes.footer}>
        <h1>THE GENERICS</h1>
      </footer>
    </div>
  )

}

export default Availableitems;



/*
const Availablemeals = (props) => {
  
  const products = productsArr.map((item) => (
    <Col key={index} md={6} className="text-center mb-4 mt-4">
      <div><h3>{item.title}</h3></div>
      <img src={item.imageUrl} alt={item.title} style={{ maxWidth: '100%', maxHeight: '200px' }} />
      <div>
        <h5>${item.price}</h5>
      
      <Button variant="info">Add to cart</Button>
      {console.log("this is productsscreen",)}
      </div>
    </Col>
  ));

  return (
    <div>
      <Header  onClick={props.onShowCart}/>
      <Container>
        <Row>
          {products}
        </Row>
      </Container>
    </div>
  );
  
};




import React from 'react';
import Header from "./Header"
import Itemlist from "./Itemlist"
import classes from"./Availableitems.module.css"
//import {Container, Row, Col,Button} from 'react-bootstrap'

const productsArr = [
  {
    id:"1",
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id:"2",
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id:"3",
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id:"4",
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];
const Availableitems=(props)=>{
  const products=productsArr.map((item)=>
    <Itemlist 
       key={item.id}
       id={item.id}
       title={item.title}
       price={item.price}
       image={item.imageUrl}>

       </Itemlist>
  )
  return(
    <div>
      <Header  onClick={props.onShowCart}/>
      <div className={classes.music}><h1>MUSIC</h1></div>
      <div className={classes.grid}>
      {products}
      </div>
      <footer className={classes.footer}>
        <h1>THE GENERICS</h1>
      </footer>
    </div>
  )

}

export default Availableitems;



*/
