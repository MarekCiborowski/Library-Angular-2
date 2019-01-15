import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {
  public orders =[]
  constructor() { }

  getOrders(){
    return this.orders;
  }

  updateOrders(orders){
    this.orders=orders;
  }
}
