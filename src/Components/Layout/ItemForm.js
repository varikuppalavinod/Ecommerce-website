import {Button} from "react-bootstrap"
const ItemForm=(props)=>{
  const submithandler=(event)=>{
    event.preventDefault()
    props.onAddToCart(1)
    console.log("this is itemform")
  }
  return(
    <form onSubmit={submithandler}>
      <Button variant="info" type="submit">Add to cart</Button>
    </form>
  )
}
export default ItemForm