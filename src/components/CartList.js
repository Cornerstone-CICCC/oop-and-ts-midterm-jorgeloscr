//SampleProduct
import { Component } from "../common/Component.js";
// import { CartItem } from "./CartItem";

export class CartList extends Component {
  constructor(props){
    super(props)

    

  }
  // handleAddToCart(){
  //   const item = {id:10, name: "Samsung", price: 1500.00}
  //   this.props.cartContext.addItem(item)
  // }
  render() {
    const product = document.createElement('div')
    product.className= 'title-content'
    product.innerHTML = `
    <h3>ALIVE STORE </h3>
    
    `

    
    
    return product
  }
}