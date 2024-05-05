import classes from "./Home.module.css"
const Homedata=(props)=>{
   return(
    <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.col}>
           {props.date}
           
          </div>
          
          <div className={classes.col}>{props.city}</div>
          <div className={classes.col}>{props.item}</div>
          <div className={classes.col}><button>Buy Tickets</button></div>
        </div>

      </div>
   )
}
export default Homedata