import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../shared/interfaces/category';
import { CategoriesService } from '../../shared/services/categories/categories.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Products: ICategory[];
  page = 1;
  pageSize = 5;
  loading$ = false;
  filterValue = '';
  addProductForm;
  addNewCatType = false;
  catTypes;
  targetEditing: ICategory;
  constructor( private cat: CategoriesService, private ModalService: NgbModal, private fb: FormBuilder, public auth: AuthService  ) {
    this.Products = this.cat.categories;
    this.catTypes = this.cat.categories_labels;
    this.addProductForm = this.fb.group({
      name: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }
  filter(filterValue) {
    this.Products = this.cat.categories.filter( p => p.name.toLowerCase().includes(filterValue.toLowerCase()) );
  }
  addNewProduct(c) {
    this.ModalService.open(c);
  }
  addProduct(product) {
    console.log(product);
    const random = Math.ceil(Math.random() * 8);
    const randomId = Math.ceil(Math.random() * 34234);
    product.img = random + '.jpg';
    product.id = randomId;
    this.cat.addCategory(product);
    this.ModalService.dismissAll();
    this.addProductForm.get('name').setValue('');
    this.addProductForm.get('desc').setValue('');
    this.addProductForm.get('price').setValue('');
  }
  editProduct(p, editModalContent) {
    console.log(p);
    this.targetEditing = p;
    this.ModalService.open(editModalContent)
  }

  delProduct(id){
    const conf = confirm('are you sure to delete this product');
    if ( conf == true ) {
      console.log(id, 'copm');
      this.cat.delete(id);
    }
  }
}
