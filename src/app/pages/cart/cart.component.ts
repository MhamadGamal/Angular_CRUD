import { Component, OnInit, DoCheck } from '@angular/core';
import { ICategory } from '../../shared/interfaces/category';
import { CartService } from '../../shared/services/cart/cart.service';
import { AuthService } from '../../shared/services/auth/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, DoCheck {
  cartProducts: ICategory[] = [];
  checkoutList: ICategory[];
  totalPrice = 0;
  finish  = false;
  constructor( private cart: CartService, public auth: AuthService, private Modal: NgbModal  ) {
    console.log(this.totalPrice)
  }
  ngDoCheck() {
    this.cartProducts = this.cart.cartProducts;
    this.checkoutList = this.cart.cartProducts;
    this.totalPrice = 0;
    this.checkoutList.forEach( el => {
      this.totalPrice += el.price * el.itemNum;
      });
   }
  ngOnInit() {

  }
  finishCheckout() {
    this.cart.emptyCart();
    this.Modal.dismissAll();
    this.finish = true;
  }
  checkoutProductNumber(value, id){
    if ( value > 0 ) {
      this.cart.cartProducts.forEach( p => {
        if (p.id === id ) {
          p.itemNum = value;
          this.cart.updateCartProducts();
          this.cart.cartProductsNumber--;
        }
      });
    } else {
      this.deleteCartItem(id);
    }
  }
  checkout(con) {
    this.Modal.open(con);
  }
  deleteCartItem(id) {
    this.cart.removeProduct(id);
  }
}
