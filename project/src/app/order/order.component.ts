import { Component, OnInit } from '@angular/core';
import { CartProductsService } from '../cart-products.service';
import { OrderListService } from '../order-list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { phoneNumberValidator } from '../validators/phone-validator';
import { charValidator } from '../validators/char-validator';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor( private CartProductsService : CartProductsService, private OrderListService : OrderListService,
    private formBuilder: FormBuilder  ) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required,charValidator]],
      lastName: ['', [Validators.required,charValidator]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required,phoneNumberValidator]],
      address: ['', Validators.required]
  });
}
get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.OrderListService.addToOrders(
          {
            firstName:this.registerForm.value.firstName,
            lastName: this.registerForm.value.lastName,
            email: this.registerForm.value.email,
            phoneNumber: this.registerForm.value.phoneNumber,
            address: this.registerForm.value.address,
            cart: this.CartProductsService.getCart(),
            isChecked: false,
          });
        this.CartProductsService.clearCart();

    }

}
