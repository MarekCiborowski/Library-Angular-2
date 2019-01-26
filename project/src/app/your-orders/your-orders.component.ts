import { Component, OnInit } from '@angular/core';
import { OrderListService } from '../order-list.service';
import { CartProductsService } from '../cart-products.service';


@Component({
  selector: 'app-your-orders',
  templateUrl: './your-orders.component.html',
  styleUrls: ['./your-orders.component.css']
})
export class YourOrdersComponent implements OnInit {

  constructor(private OrderListService : OrderListService, private CartProductsService : CartProductsService) { }

  ngOnInit() {
  }

  
  // clicked(event) {
  //   event.target.classList.toggle('myButton'); // To toggle
  // }
}
