import classes from "./Form.module.css"
import {useState} from "react"
const Form=(props)=>{
    const[form,setform]=useState({
        title:"",
        openingtext:"",
        releasedate:"",
    })
    const submithandler=(e)=>{
      e.preventDefault()
      const formdata={
        title:form.title,
        openingtext:form.openingtext,
        releasedate:form.releasedate,
        
      }
      props.onaddmovie(formdata)
    
    setform({
        title:"",
        openingtext:"",
        releasedate:"",
    })
}
   return(
    <form onSubmit={submithandler}>
    <div  className={classes.container}>
    <div>
       <label htmlFor="title">Title</label>
       <input type="text" id="title" className={classes.input}
        value={form.title} onChange={(e)=>setform({...form,title:e.target.value})}/>
    </div>
    <div>
        <label htmlFor="openingtext">Opening Text</label>
        <input type="text" id="openingtext" className={classes.input}
        value={form.openingtext} 
        onChange={(e)=>setform({...form,openingtext:e.target.value})} />
    </div>
    <div>
        <label htmlFor="date">Releasing Date</label>
        <input type="text" id="date" className={classes.input}
        value={form.releasedate}
         onChange={(e)=>setform({...form,releasedate:e.target.value})}/>
    </div>
    </div>
    <button type="submit">Add Movie</button>
    </form>
   )
}
export default Form