import { Component, OnInit } from '@angular/core';
import { freeApiService } from '../services/freeapi.service';
import { products } from '../classes/products';
import { CartService } from '../cart.service';
import { ProductDetailsService } from '../product-details.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})



export class ProductComponent implements OnInit {
  

  productslist!: products[];

  constructor(private _freeapiservice: freeApiService, private cartService: CartService, private productdetails: ProductDetailsService) { }

  ngOnInit(): void {
    this._freeapiservice.getProducts().subscribe(
      data=>
      {
          this.productslist = data;
      }
    )
  }

  addToCart(product: products) {
    this.cartService.addToCart(product);
  }

  giveDetails(product: products)
  {
    this.productdetails.giveDetails(product);
  }

}

