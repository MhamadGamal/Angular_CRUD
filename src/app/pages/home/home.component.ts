import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../shared/interfaces/category';
import { CategoriesService } from '../../shared/services/categories/categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: ICategory[] = [];
  categoriesNames = [];
  filtered = 'all';
  filteredCat = [];
  loadMore = false;
  maxProductsNum;
  currntProductsNum;
  constructor( private cat: CategoriesService ) {
    this.categories = this.cat.getCategories();
    this.categoriesNames = this.cat.categories_labels;
    this.maxProductsNum = this.categories.length;
    this.filteredCat = this.categories;
    // if ((this.categories.length > 4) && (this.filtered === 'all')) {
    //   this.filteredCat = this.categories.slice(0, 3);
    //   this.loadMore = true;
    //   this.currntProductsNum = 3;
    // } else {
    //   this.filteredCat = this.categories;
    // }
  }

  ngOnInit() {

  }
  filter(c){
    this.filtered = c;
    this.filteredCat = this.categories.filter( (cate) => {
      if ( c === 'all' ){
        return this.categories;
      } else {
        return cate.name === c;
      }
    });
  }
  // loadMoreP() {
  //   if (this.filtered === 'all') {
  //     for (let i = 0; i < 3; i++) {
  //       if ((this.currntProductsNum ) < this.categories.length) {
  //         this.filteredCat.push( this.categories[this.currntProductsNum]);
  //         this.currntProductsNum++;
  //       } else {
  //         this.loadMore = false;
  //         break;
  //       }
  //     }
  //   }
  // }
}
