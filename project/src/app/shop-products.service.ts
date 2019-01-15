import { Injectable } from '@angular/core';

import * as data from './data/products.json'

@Injectable({
  providedIn: 'root'
})
export class ShopProductsService {

  data: any[]

  constructor () { this.data = data.products}
  
  getData(){
    return data.products;
  }
  
}
