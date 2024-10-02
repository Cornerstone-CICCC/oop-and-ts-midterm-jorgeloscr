import { Component } from "../common/Component.js";
import { CartContext } from "../contexts/CartContext.js";
import { CartItem } from "./CartItem.js";
import { Header } from "./Header.js";
import { CartList } from "./CartList.js";
import { ProductList } from "./ProductList.js";

export class App extends Component {
  render() {

    const appCart = document.createElement('div')
    appCart.className= 'container'
    appCart.innerHTML= `
    <div class="header"></div>
    <main></main>
    <aside id='cart-items'></aside>
    `

    const header = new Header().render()//instances
    const cart = new CartItem({cartContext: this.props.cartContext}).render()
    const cartList = new CartList({cartContext : this.props.cartContext}).render()
    const productList = new ProductList({ cartContext: this.props.cartContext})


    appCart.querySelector('.header').appendChild(header)
    appCart.querySelector('aside').appendChild(cart)
    appCart.querySelector('main').appendChild(cartList)

    productList.mount(appCart.querySelector('main'))

    return appCart
    
  }
}