import { Component, OnInit } from '@angular/core';
import { freeApiService } from '../services/freeapi.service';
import { products } from '../classes/products';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

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
