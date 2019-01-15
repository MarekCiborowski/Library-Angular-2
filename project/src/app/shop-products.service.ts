import { Injectable } from '@angular/core';

import * as data from './data/products.json'

@Injectable({
  providedIn: 'root'
})
export class ShopProductsService {

  constructor () { }
  getData(){

    return data;
  }
}
