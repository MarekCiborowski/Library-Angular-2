import { Component, OnInit } from '@angular/core';
import { CartProductsService } from '../cart-products.service';
import { OrderListService } from '../order-list.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor( private CartProductsService : CartProductsService, private OrderListService : OrderListService  ) { }

  ngOnInit() {
  }

}
