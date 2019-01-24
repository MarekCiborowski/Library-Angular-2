import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartProductsService {
  cart: any[]
  constructor() { this.cart=[]}

  getCart(){
    return this.cart;
  }

  updateCart(cart){
    this.cart=cart;
  }


  
  addToCart(product){
    var cartProduct = this.getCartProductById(product.id)
    if(cartProduct===undefined){
      
      var newItem = {
        id:product.id,
        name:product.name,
        price:product.price,
        description:product.description,
        quantity:1
      }
      this.cart.push(newItem);
    }
    else{
    
      this.cart.find(item=>item.id===cartProduct.id).quantity=cartProduct.quantity+1;
    }
  }

  checkCartProduct(id){
    return !this.cart.filter(cartItem => cartItem.id === id)[0]===undefined;
  }

  getCartProductById(id){
    var xd = this.cart.filter(cartItem => cartItem.id === id)[0]
    console.log(xd)
    return xd
  }
  removeFromCart(id){
    var currentProduct = this.getCartProductById(id);
    var cartWithoutItem = this.cart.filter(cartItem => cartItem.id !== currentProduct.id)
    if(currentProduct.quantity===1){
      this.cart=cartWithoutItem;
    }
    else{
      cartWithoutItem.push({
        id:currentProduct.id,
        name:currentProduct.name,
        price:currentProduct.price,
        description:currentProduct.description,
        quantity:currentProduct.quantity-1
      })
      this.cart=cartWithoutItem;
    }
  }

  removeAllFromCart(id){
    var cartWithoutItem = this.cart.filter(cartItem => cartItem.id !== id)
    this.cart=cartWithoutItem;
  }

  getTotalPrice(){
    var p = 0.00;
    this.cart.forEach(element => {
        p += parseFloat(element.price) * parseInt(element.quantity);
    });
    return p.toFixed(2);
  }

  isCartEmpty(){
    return this.cart.length===0;
  }
  getSortedCart(){
    return this.cart.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)); 
  }
}
