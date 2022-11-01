import { Component, OnInit } from '@angular/core';
import { freeApiService } from '../services/freeapi.service';
import { products } from '../classes/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productslist!: products[];

  constructor(private _freeapiservice: freeApiService) { }

  ngOnInit(): void {
    this._freeapiservice.getProducts().subscribe(
      data=>
      {
          this.productslist = data;
      }
    )
  }

}
