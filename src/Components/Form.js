/*
import React, {useState} from 'react';
import classes from "./Form.module.css"

const Form = () => {
    const[form,setform]=useState({
        name:"",
        email:"",
        phonenumber:"",
    })
    const handleinputchange=(e)=>{
        const{name,value}=e.target

        setform(prevstate=>({
            ...prevstate,
            [name]:value,
        }))
    }
    const submithandler=(e)=>{
     e.preventDefault()
     const formdata={
        name:form.name,
        email:form.email,
        phonenumber:form.phonenumber,
     }
     console.log(formdata)
    }
  return (
    <div className={classes.form}>
      <h2>Contact Us</h2>
      <form onSubmit={submithandler}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" 
          value={form.name} onChange={handleinputchange} />
        </div>
        <div>
          <label>Email Id:</label>
          <input type="email" name="email" 
          value={form.email} onChange={handleinputchange} />
        </div>
        <div> 
          <label>Phone Number:</label>
          <input type="number" name="phonenumber" 
          value={form.phonenumber} onChange={handleinputchange}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
*/


import React, { useState } from 'react';
import classes from "./Form.module.css";

const Form = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phonenumber: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = {
                name: form.name,
                email: form.email,
                phonenumber: form.phonenumber,
            };

            const response = await fetch("https://react-http-6895f-default-rtdb.firebaseio.com/movie.json", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            console.log('Form data submitted successfully:', formData);
        } catch (error) {
            console.error('Error submitting form data:', error.message);
        }
    };

    return (
        <div className={classes.form}>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={form.name} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Email Id:</label>
                    <input type="email" name="email" value={form.email} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="number" name="phonenumber" value={form.phonenumber} onChange={handleInputChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default Form;
