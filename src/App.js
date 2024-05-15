// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [sellingPrice, setSellingPrice] = useState('');
  const [productName, setProductName] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get("https://crudcrud.com/api/f1b6809b520e490882dd09dea7d0028e/appointmentData")
      .then(response => {
        setProducts(response.data);
        updateTotalValue(response.data);
      })
      .catch(error => console.log(error));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      'sellingprice': sellingPrice,
      'productname': productName
    };
    axios.post("https://crudcrud.com/api/f1b6809b520e490882dd09dea7d0028e/appointmentData", newProduct)
      .then(response => {
        setProducts([...products, response.data]);
        setSellingPrice('');
        setProductName('');
        updateTotalValue([...products, response.data]);
      })
      .catch(error => console.log(error));
  };

  const deleteUserDetails = (id) => {
    axios.delete(`https://crudcrud.com/api/f1b6809b520e490882dd09dea7d0028e/appointmentData/${id}`)
      .then(() => {
        const updatedProducts = products.filter(product => product._id !== id);
        setProducts(updatedProducts);
        updateTotalValue(updatedProducts);
      })
      .catch(error => console.log(error));
  };

  const updateTotalValue = (products) => {
    const total = products.reduce((acc, product) => acc + parseFloat(product.sellingprice), 0);
    setTotalValue(total);
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <label>
          Selling price:
          <input 
            type="number" 
            value={sellingPrice} 
            onChange={(e) => setSellingPrice(e.target.value)} 
          />
        </label>
        <label>
          Product Name:
          <input 
            type="text" 
            value={productName} 
            onChange={(e) => setProductName(e.target.value)} 
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
      <div>
        <p>Products:</p>
        <ul>
          {products.map(product => (
            <li key={product._id}>
              {product.sellingprice} - {product.productname}
              <input 
                type="button" 
                value="Delete product" 
                onClick={() => deleteUserDetails(product._id)} 
              />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>Total value worth of products: <span>{totalValue}</span></p>
      </div>
    </div>
  );
}

export default App;



/*
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h1>Let's get Started</h1>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
*/