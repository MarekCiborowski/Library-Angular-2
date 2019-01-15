import { Component, OnInit } from '@angular/core';
import { ShopProductsService } from '../shop-products.service';
import { CartProductsService } from '../cart-products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products ={};
  constructor(private ShopProductsService : ShopProductsService, private CartProductsService : CartProductsService) { }



  ngOnInit() {
    
  }

  

}
