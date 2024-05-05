 import classes from "./Home.module.css"
 import Homedata from "./Homedata"

 const data=[
  { id:"1",date:"july 16" ,city:"DETROIT,MI",item:"DTE ENERGY MUSIC THEATRE"},
  {id:"2",date:"july 17" ,city:"TORANTO,ON",item:"BUDWISER STAGE"},
  {id:"3",date:"july 18" ,city:"BRISTAW,WA",item:"JIGGY LUBE LIVE"},
  {id:"4",date:"july 19" ,city:"PHOENIX,AZ",item:"AK CHIN PAVILION"},
  {id:"5",date:"july 20" ,city:"LAS VEGAS,NV",item:"T-MOBILE ARENA"},
  {id:"6",date:"july 21" ,city:"CONCARD,CA",item:"CONCORD POVILION"}
 ]

 const totaldata=data.map((items)=>
 <Homedata key={items.id}
 date={items.date}
 city={items.city}
 item={items.item}
 />)
 
 const Home=()=>{
  return(
    <div>
    <div className={classes.home}>
      <h1>The Generics</h1>
      <div className={classes.album}>
       <button><h4>get our latest album</h4></button> 
        </div> 
    
    <div className={classes.image}>
          <button><img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRC4rXZ8OJcUUeF3U_z4aUWzQ8d-UpShHxkL8N6OiaAE89IlEvZ"alt="music logo"/></button>
        </div>
    </div>
    <div className={classes.tour}>
      <h2>Tours</h2>
      <div>{totaldata}</div>
    </div>
    <div className={classes.generics}>
      <h1>Generics</h1>
    </div>
    </div>
    
  )
 }
 export default Home
