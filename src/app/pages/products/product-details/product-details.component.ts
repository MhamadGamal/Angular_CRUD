import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../../shared/services/categories/categories.service';
import { ICategory } from '../../../shared/interfaces/category';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  targetId;
  product: ICategory;
  constructor( private param: ActivatedRoute, private cat: CategoriesService ) {
    this.targetId = this.param.snapshot.paramMap.get('id');
    this.product = this.cat.search(this.targetId);
  }

  ngOnInit() {
  }

}
