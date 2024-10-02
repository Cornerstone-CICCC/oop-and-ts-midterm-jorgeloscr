export class CartContext {
  constructor(){
    this.cart = []
    this.listeners= []//listener functions
  }

  addItem(item){
    this.cart.push(item)
    this.notifyListeners()
  }

  deleteItem(){
    

// Add click event listener to each button

    // let cantItems = document.querySelector(".cart-counter")
    // let items = parseInt(cantItems.textContent) -1
    // cantItems.textContent = items
    // let cantItems = document.querySelector(".cart-counter").value
    
    console.log("ggg")
    // this.cart = this.cart.filter( item => item.id != 1)
    // this.notifyListeners()

    // const btnDelete = document.querySelector('.btn-delete-item').addEventListener('click',this.handleAddToCart)
    // console.log('hi')
    this.notifyListeners()
  }



  getCart(){
    return this.cart
  }

  subscribe(listener){
    
    this.listeners.push(listener)
    
    
  }

  notifyListeners(){
    this.listeners.forEach(listener => listener(this.cart))
  }
}