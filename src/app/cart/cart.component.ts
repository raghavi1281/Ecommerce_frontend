import { Component, OnInit } from '@angular/core';
import { freeApiService } from '../services/freeapi.service';
import { products } from '../classes/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productslist!: products[];

  constructor(private _freeapiservice: freeApiService) { }

  ngOnInit(): void {
    this._freeapiservice.getProductsinCart().subscribe(
      data=>
      {
          this.productslist = data;
      }
    )
  }

}
