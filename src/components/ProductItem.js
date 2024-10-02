import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props){
    super(props)
    this.handleAddToCart = this.handleAddToCart.bind(this)
  }

  handleAddToCart(){
    this.props.cartContext.addItem(this.props.product)
    
  }
  render() {
    const product = document.createElement('div')
    product.className= 'items'
    product.innerHTML=`
    <h3>${this.props.product.title}</h3>
    <img class= "item-image"src="${this.props.product.image}"/>
    <p>${this.props.product.price}</p>
    <h4>${this.props.product.id}</h4>
    <button class ="add-to-cart-btn">Add to Cart </button>
    `

    product.querySelector(".add-to-cart-btn").addEventListener('click', this.handleAddToCart)
    return product
  }
}