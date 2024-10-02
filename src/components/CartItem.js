//CART
import { Component } from "../common/Component.js";

export class CartItem extends Component {
 
  constructor(props){   
    super(props)
    this.itemCont = 0
    
    this.state = {cart: []}
    this.updateCant = this.updateCant.bind(this)
    this.updateCart = this.updateCart.bind(this)
    this.handleAddToCart = this.handleDeleteCart.bind(this)
    this.props.cartContext.subscribe(this.updateCart)
    this.productsListElement = null
    this.indiceItem = null
    
  }


  handleDeleteCart(){//here it
    let cted = this.productsListElement.querySelectorAll('.btn-delete-item');
    
   
    cted.forEach(button => {
      button.addEventListener('click', function(event) {
          // Get the ID of the clicked button
          
          button.event.target.id
         
           
      });
  });
    
  console.log(this.u);
  this.props.cartContext.deleteItem(this.props.product)
  }

  updateCart(cart){
    console.log(cart)
    this.state.cart = cart
    this.productsListElement.innerHTML = ''
    this.itemCont ++
    this.cartItems = this.state.cart.map(item => `<li class="li-cart-item" "><img class="item-image" 
      src="${item.image}"/>${item.id} - $${item.price} Description:${item.description} <button class="btn-delete-item" id="id${item.id}" value="${item.id}">Delete</button></li>`

     
    )
    
    
    let u=this.state.cart.length 
    let v =Object.keys(this.state)
    console.log(u)
    this.itemSelected = this.cartItems
    this.productsListElement.innerHTML = this.cartItems
    
    let addEventList =this.productsListElement.querySelectorAll(".btn-delete-item")
    addEventList.forEach((e)=>{
      
      e.addEventListener('click',()=> this.handleDeleteCart())
    })
    
    // this.cantItems = document.querySelector(".cart-counter")
    // let items = parseInt(this.cantItems.textContent) +1
    // this.cantItems.textContent = items
   

  
   

    
  } 

  updateCant(){
    
  }

  render() {
    
    const createElement = document.createElement('div')
    createElement.className = 'items'
    createElement.innerHTML=`
    <h1>Cart</h1>
    <ul></ul>
    `
    this.productsListElement = createElement.querySelector("ul")
    
    return createElement
  }
}