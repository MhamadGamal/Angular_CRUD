import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../../shared/services/cart/cart.service';

@Component({
  selector: '[single-product]',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {
  @Input() item;
  addToCart;
  itemNum;
  constructor(private cart: CartService) {
  }

  ngOnInit() {
    if (localStorage.getItem('addToCart' + this.item.id + '') &&
     localStorage.getItem('addToCart' + this.item.id + '').includes(this.item.id)) {
      this.addToCart = true;
    } else {
      this.addToCart = false;
    }
    if (localStorage.getItem('itemNum' + this.item.id + '') ) {
      this.itemNum = localStorage.getItem('itemNum' + this.item.id + '');
    } else {
      this.itemNum = 1;
    }
  }
  addToCartM() {
    this.itemNum = 1;
    this.item.itemNum = 1;
    localStorage.setItem('addToCart' + this.item.id + '', 'item' + this.item.id + '');
    this.addToCart = true;
    this.cart.addProduct(this.item);
  }
  decItems(id) {
    if (this.itemNum > 0) {
      this.itemNum--;
      this.cart.cartProductsNumber--;
      localStorage.setItem('itemNum' + this.item.id + '', this.itemNum);
      localStorage.setItem('cartProductsNumber', this.cart.cartProductsNumber);
      this.cart.cartProducts.forEach( p => {
        if (p.id === id) {
          p.itemNum--;
        }
      });
      this.cart.updateCartProducts();
      if(this.itemNum == 0){
        this.addToCart = false;
        localStorage.removeItem('addToCart' + this.item.id );
        localStorage.removeItem('itemNum' + this.item.id);
        this.cart.cartProducts.forEach( (p, index) =>{
          if(p.id == this.item.id){
            this.cart.cartProducts.splice(index, 1);
            this.cart.updateCartProducts();
          }
        })
      }
    }
  }
  incItems(id) {
    this.itemNum++;
    this.cart.cartProductsNumber++;
    localStorage.setItem('itemNum' + this.item.id + '', this.itemNum);
    localStorage.setItem('cartProductsNumber', this.cart.cartProductsNumber);
    this.cart.cartProducts.forEach( p => {
      if (p.id === id) {
        p.itemNum++;
      }
    });
    this.cart.updateCartProducts();
  }
}
