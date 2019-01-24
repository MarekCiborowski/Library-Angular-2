import { Component, OnInit } from '@angular/core';
import { CartProductsService } from '../cart-products.service';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private CartProductsService : CartProductsService, private NavigationService : NavigationService) { }

  ngOnInit() {
  }

}
