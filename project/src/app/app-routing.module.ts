import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OrderComponent} from "./order/order.component";
import {CartComponent} from "./cart/cart.component";
import {YourOrdersComponent} from "./your-orders/your-orders.component"

const routes: Routes = [
  { path: 'order', component: OrderComponent,pathMatch: 'full' },
  { path: 'cart', component: CartComponent,pathMatch: 'full' },
  { path: 'yourOrders', component: YourOrdersComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
