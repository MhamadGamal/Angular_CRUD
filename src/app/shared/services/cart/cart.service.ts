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
    this.updateCartProducts();
  }
  removeProduct(id) {
    let P_Num = 0;
    this.cartProducts.forEach( (p , index ) => {
      if (p.id === id) {
        P_Num = p.itemNum;
        this.cartProducts.splice(index, 1 );
      }
    });
    this.cartProductsNumber -= P_Num;
    for (const k in localStorage) {
      if (k.includes(id) ) {
        localStorage.removeItem(k);
      }
    }
    this.updateCartProducts();
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
    this.updateCartProducts();
    // localStorage.clear();
  }
}
