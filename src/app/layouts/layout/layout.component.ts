import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from '../../shared/services/cart/cart.service';
import { AuthService } from '../../shared/services/auth/auth.service';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, DoCheck {
  cartItems;
  isMenuCollapsed = true;
  constructor( private cart: CartService, public auth: AuthService ) {
  }

  ngOnInit() {
    // this.cartItems = this.cart.cartProductsNumber;
    // console.log(this.cartItems);
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngDoCheck() {
    this.cartItems = this.cart.cartProductsNumber;
    // console.log( this.cart.cartProducts );
    // console.log( this.cart.cartProductsNumber );
  }
  logout() {
    this.cart.emptyCart();
    this.auth.signOut();
  }
}
