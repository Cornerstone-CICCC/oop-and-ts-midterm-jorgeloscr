import { Component } from "../common/Component.js";

export class Header extends Component {
  render() {

    const header = document.createElement('header')
    header.innerHTML=`
    <div><h1>@LIVE STORE</div>
    <nav>
    <li><a href='#'>Home</a></li>
    <li><a href='#cart-items'>Cart <h2 value=0 class='cart-counter'>0</h2></a></li>
    </nav>
    `

    return header
  }
}