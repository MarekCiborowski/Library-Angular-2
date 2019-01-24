import { Injectable } from '@angular/core';

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
}
