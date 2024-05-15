
import {useContext,useEffect} from "react"
import ItemForm from "./ItemForm"
//import {Button} from 'react-bootstrap'
//import classes from"./Items.module.css"
//import classes from "./Header.module.css"
import axios from "axios"
import cartcontext from "../Store/cart-context"
const Itemlist=(props)=>{

    
    const cartctx=useContext(cartcontext)
    console.log("this is cartlist",cartctx.userEmail)
        
     useEffect(()=>{
        if(cartctx.userEmail){
        fetchproducts()
        }
     },[cartctx.userEmail])

    const fetchproducts=()=>{
        axios.get(`https://crudcrud.com/api/d45948262eaa4a21a3d8942275710708/cart${cartctx.userEmail}`)
        .then(response=>{
         const responsedata=response.data
           cartctx.additem(responsedata)
        })
        .catch(error=>{console.log(error)})
    }
        
    const addToCartHandler=(amount)=>{
     const item={
        id:props.id,
        name:props.title,
        amount:amount,
        price:props.price,
        image:props.image,
     }
      cartctx.additem(item) 
      
      axios.post(`https://crudcrud.com/api/d45948262eaa4a21a3d8942275710708/cart${cartctx.userEmail}`, item)
      .then(response => {
          console.log('Item added to backend:', response.data);
      })
      .catch(error => {
          console.error('Error adding item to backend:', error);
      });   
}
 return(
    <div>
        <div><h4>{props.title}</h4></div>
        <div><img src={props.image} alt={props.title}/></div>
        <div>${props.price}</div>
       
        <div>
            <ItemForm id={props.id} onAddToCart={addToCartHandler}/>
        </div>
    </div>
 )
}
export default Itemlist



/*
import { useContext} from "react";
import axios from "axios";
import ItemForm from "./ItemForm";
import cartcontext from "../Store/cart-context";

const Itemlist = (props) => {
    const cartctx = useContext(cartcontext);

        // Fetch items from backend when the component mounts
        axios.get('https://crudcrud.com/api/a8ec749cbcee407687b59608133a3212/cart')
            .then(response => {
                // Set the retrieved items in the cart context
                const userdata=response.data
                userdata.forEach(user=>{
                  cartctx.additem(user);
                })
               
                console.log('Items retrieved from backend:', response.data);
            })
            .catch(error => {
                console.error('Error retrieving items from backend:', error);
            });
    

    const addToCartHandler = (amount) => {
        const item = {
            id: props.id,
            name: props.title,
            amount: amount,
            price: props.price,
            image: props.image,
        };

      //  cartctx.additem(item);

        axios.post('https://crudcrud.com/api/a8ec749cbcee407687b59608133a3212/cart', item)
            .then(response => {
                console.log('Item added to backend:', response.data);
            })
            .catch(error => {
                console.error('Error adding item to backend:', error);
            });
    };

    return (
        <div>
            <div><h4>{props.title}</h4></div>
            <div><img src={props.image} alt={props.title}/></div>
            <div>{props.price}</div>
            <div>
                <ItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>
        </div>
    );
};

export default Itemlist;




import { useContext, useEffect } from "react";
import axios from "axios";
import ItemForm from "./ItemForm";
import cartcontext from "../Store/cart-context";

const Itemlist = (props) => {
    const cartctx = useContext(cartcontext);

    useEffect(() => {
        // Fetch items from backend when the component mounts
        axios.get('https://crudcrud.com/api/7316804948b24bc0a5b1caf1997662f2/cart')
    
            .then(response => {
                // Set the retrieved items in the cart context
                const userdata = response.data;
                userdata.forEach(user => {
                    cartctx.additem(user);
                });

                console.log('Items retrieved from backend:', response.data);
            })
            .catch(error => {
                console.error('Error retrieving items from backend:', error);
            });
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    const addToCartHandler = (amount) => {
        const item = {
            id: props.id,
            name: props.title,
            amount: amount,
            price: props.price,
            image: props.image,
        };

        // Add item to cart context
        cartctx.additem(item);

        // Post item to the backend
        axios.post('https://crudcrud.com/api/7316804948b24bc0a5b1caf1997662f2/cart', item)
            .then(response => {
                console.log('Item added to backend:', response.data);
            })
            .catch(error => {
                console.error('Error adding item to backend:', error);
            });
    };

    return (
        <div>
            <div><h4>{props.title}</h4></div>
            <div><img src={props.image} alt={props.title}/></div>
            <div>{props.price}</div>
            <div>
                <ItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>
        </div>
    );
};

export default Itemlist;
 

import { useContext, useEffect } from "react";
import axios from "axios";
import ItemForm from "./ItemForm";
import cartcontext from "../Store/cart-context";

const Itemlist = (props) => {
    const cartctx = useContext(cartcontext);

    useEffect(() => {
        // Fetch items from backend when the component mounts
        axios.get('https://crudcrud.com/api/a8ec749cbcee407687b59608133a3212/cart')
            .then(response => {
                // Set the retrieved items in the cart context
               // const userdata = response.data;
                cartctx.additem(response.data); // Directly set items without looping
                console.log('Items retrieved from backend:', response.data);
            })
            .catch(error => {
                console.error('Error retrieving items from backend:', error);
            });
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    const addToCartHandler = (amount) => {
        const item = {
            id: props.id,
            name: props.title,
            amount: amount,
            price: props.price,
            image: props.image,
        };

        // Add item to cart context
        cartctx.additem(item);

        // Post item to the backend
        axios.post('https://crudcrud.com/api/a8ec749cbcee407687b59608133a3212/cart', item)
            .then(response => {
                console.log('Item added to backend:', response.data);
            })
            .catch(error => {
                console.error('Error adding item to backend:', error);
            });
    };

    return (
        <div>
            <div><h4>{props.title}</h4></div>
            <div><img src={props.image} alt={props.title}/></div>
            <div>{props.price}</div>
            <div>
                <ItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div>
        </div>
    );
};

export default Itemlist;
*/