import { Component, OnInit } from '@angular/core';
import { ShopProductsService } from '../shop-products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = {};
  constructor(private ShopProductsService : ShopProductsService) { }

  ngOnInit() {
    this.products = this.ShopProductsService.getData();
    console.log(this.products);
  }

}
