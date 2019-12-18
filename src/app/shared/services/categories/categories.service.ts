import { Injectable } from '@angular/core';
import { ICategory } from '../../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories: ICategory[] =
  [
    {
      name: 'mobile',
      id: 10,
      img: '1.jpg',
      desc: 'Huawei',
      price: 2000
    },
    {
      name: 'mobile',
      id: 11,
      img: '8.jpg',
      desc: 'Samsung',
      price: 4500

    },
    {
      name: 'PC devices',
      id: 50,
      img: '6.jpg',
      desc: 'Dell 2342',
      price: 2700

    },
    {
      name: 'laptop',
      id: 20,
      img: '2.jpg',
      desc: 'hp probook',
      price: 12500

    },
    {
      name: 'laptop',
      id: 21,
      img: '7.jpg',
      desc: 'lenovo 342',
      price: 8700
    },
    {
      name: 'PC devices',
      id: 51,
      img: '5.jpg',
      desc: 'mac',
      price: 6300
    },
    {
      name: 'laptop',
      id: 54,
      img: '4.jpg',
      desc: 'accer',
      price: 6500
    },
    {
      name: 'mobile',
      id: 421,
      img: '7.jpg',
      desc: 'iphone',
      price: 12300
    },
    {
      name: 'PC devices',
      id: 456,
      img: '1.jpg',
      desc: 'Dell 653',
      price: 3300
    },
    {
      name: 'laptop',
      id: 48,
      img: '2.jpg',
      desc: 'accer',
      price: 10300
    }
  ];
  // tslint:disable-next-line: variable-name
  categories_labels = ['mobile', 'laptop', 'PC devices'];
  constructor() {
    if ( localStorage.getItem('Allcategories') ){
      this.categories = JSON.parse( localStorage.getItem('Allcategories') );
    } else {
      localStorage.setItem('Allcategories', JSON.stringify(this.categories));
    }
   }
  getCategories() {
    return this.categories;
  }
  addCategory( item: ICategory) {
    this.categories.push(item);
    localStorage.setItem('Allcategories', JSON.stringify(this.categories));
  }
  update() {
    localStorage.setItem('Allcategories', JSON.stringify(this.categories));
  }
  delete(id){
    this.categories.forEach( (c, index) => {
      if ( c.id == id ) {
        console.log(c);
        this.categories.splice(index, 1);
        console.log(this.categories);
        this.update();
      }
    });
  }
  search(id): ICategory {
    return this.categories.filter( c => c.id == id )[0];
  }
}
