import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../shared/interfaces/category';
import { CartService } from '../../shared/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts: ICategory[] = [];
  constructor( private cart: CartService ) {
    this.cartProducts = this.cart.cartProducts;
   }

  ngOnInit() {
  }

}
