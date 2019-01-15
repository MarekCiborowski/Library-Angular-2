import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { YourOrdersComponent } from './your-orders/your-orders.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CartProductsService} from './cart-products.service';
import { ShopProductsService} from './shop-products.service';
import { OrderListService} from './order-list.service'
import { HttpClientModule } from '@angular/common/http'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    OrderComponent,
    YourOrdersComponent,
    NavigationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CartProductsService,ShopProductsService,OrderListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
