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


  
  addToCart(product, cartProduct){
    console.log(product);
  }

  getCartProductById(id){
    this.cart.filter(cartItem => cartItem.id === id)[0]
  }
}
