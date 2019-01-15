import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartProductsService {
  public cart = []
  constructor() { }

  getCart(){
    return this.cart;
  }

  updateCart(cart){
    this.cart=cart;
  }
}
