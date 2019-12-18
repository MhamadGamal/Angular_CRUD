import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ICategory } from '../../../shared/interfaces/category';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoriesService } from '../../../shared/services/categories/categories.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit, OnChanges {
  @Input() data: ICategory;
  addProductForm;
  catTypes;
  constructor( private fb: FormBuilder, private cat: CategoriesService, public modal: NgbModal) {
    this.catTypes = this.cat.categories_labels;
    this.addProductForm = this.fb.group({
      name: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }
  ngOnChanges() {
    this.addProductForm.get('name').setValue(this.data.name);
    this.addProductForm.get('desc').setValue(this.data.desc);
    this.addProductForm.get('price').setValue(this.data.price);
  }
  ngOnInit() {
  }
  update(value) {
    this.cat.categories.forEach( p =>  {
      if (p.id === this.data.id) {
        p.desc = value.desc;
        p.name = value.name;
        p.price = value.price;
        this.cat.update();
        this.modal.dismissAll();
      }
    });
  }
}
