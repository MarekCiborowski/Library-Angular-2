import { Injectable } from '@angular/core';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {
  orders: any[]
  constructor() {this.orders=[] }

  getOrders(){
    return this.orders;
  }

  updateOrders(orders){
    this.orders=orders;
  }


  
  addToOrders(order){
    let indexArray = 0;
    for (var i = 0; i < this.orders.length; i++) {
    if (this.orders[i].id !== null)
      indexArray = this.orders[i].id;
  }
  var newIndex = indexArray === 0 ? 1 : indexArray + 1;
    
      
      var newItem = {
        id:newIndex,
        firstName:order.firstName,
        lastName: order.lastName,
        email: order.email,
        phoneNumber: order.phoneNumber,
        address: order.address,
        cart: order.cart,
        isChecked: false,
      };
      this.orders.push(newItem);
    
  }

  

  
  removeFromOrders(id){
    if (
      window.confirm(
        "Are you sure you wish to delete this order?"
      )
    ){
    var ordersWithoutItem = this.orders.filter(orderItem => orderItem.id !== id)
    this.orders=ordersWithoutItem;
    }
  }

  
  clickedButton($index){
    this.orders[$index].isChecked =! this.orders[$index].isChecked;
  }
  

  areOrdersEmpty(){
    return this.orders.length===0;
  }
  getSortedOrders(){
    return this.orders.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)); 
  }
}
