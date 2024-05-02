/*
//import Button from 'react-bootstrap/Button';
import React from 'react';
import Header from "./Header"
import {Container,Row,Col} from 'react-bootstrap'

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const products=productsArr.map((item,index)=><li key={index}>
 {item.title}<br/> {item.price}<br/> {<img src={item.imageUrl} alt={item.title}/>}
</li>)
const Productsscreen=()=>{
    return(
        <div>
        <div>
          <Header></Header>
        
            {products}
          
        </div>
       
        </div>

    )
}
export default Productsscreen
*/

import React from 'react';
import Header from "./Header"
import {Container, Row, Col,Button} from 'react-bootstrap'

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const Productsscreen = (props) => {
  const products = productsArr.map((item, index) => (
    <Col key={index} md={6} className="text-center mb-4 mt-4">
      <div><h3>{item.title}</h3></div>
      <img src={item.imageUrl} alt={item.title} style={{ maxWidth: '100%', maxHeight: '200px' }} />
      <div>
        <h5>${item.price}</h5>
      
      <Button variant="info">Add to cart</Button>{' '}
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

export default Productsscreen;
