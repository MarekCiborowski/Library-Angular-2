import { Component, OnInit } from '@angular/core';
import { CartProductsService } from '../cart-products.service';
import { OrderListService } from '../order-list.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  charRegex = /^[a-zA-ZąćęłńóśźżĄĘŁŃÓŚŹŻ]+$/;
  numRegex = /^\d{9}$/;

  constructor( private CartProductsService : CartProductsService, private OrderListService : OrderListService,
    private formBuilder: FormBuilder  ) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required,Validators.pattern(this.charRegex)],
      lastName: ['', Validators.required,Validators.pattern(this.charRegex)],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(this.numRegex)]],
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

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }

}
