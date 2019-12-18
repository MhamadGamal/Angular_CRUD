import { Injectable } from '@angular/core';
import { ICategory } from '../../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProductsNumber;
  cartProducts: ICategory[];
  constructor() {
    if (localStorage.getItem('cartProductsNumber')) {
      this.cartProductsNumber = localStorage.getItem('cartProductsNumber');
    } else {
      this.cartProductsNumber = 0;
    }
    if (localStorage.getItem('cartProducts')) {
      this.cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    } else {
      this.cartProducts = [];
    }
  }

  addProduct(p: ICategory) {
    this.cartProducts.push(p);
    this.cartProductsNumber++;
    localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
    localStorage.setItem('cartProductsNumber', this.cartProductsNumber);
  }
  updateCartProducts() {
    localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
    localStorage.setItem('cartProductsNumber', this.cartProductsNumber);
  }
  getCartProducts() {
    return this.cartProducts;
  }
  emptyCart() {
    this.cartProductsNumber = 0;
    this.cartProducts = [];
    for (const k in localStorage) {
      if (k.startsWith('addToCart') || k.startsWith('itemNum')) {
        localStorage.removeItem(k);
      }
    }
    localStorage.setItem('cartProducts', JSON.stringify(this.cartProducts));
    localStorage.setItem('cartProductsNumber', this.cartProductsNumber);
    // localStorage.clear();
  }
}
