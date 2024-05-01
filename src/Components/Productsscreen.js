
import React from 'react';

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
            {products}
        </div>
        </div>

    )
}
export default Productsscreen
