import { Component, OnInit } from '@angular/core';
import { freeApiService } from '../services/freeapi.service';
import { products } from '../classes/products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductDetailsService } from '../product-details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product = this.productDetails.getDetails();

  constructor(private productDetails: ProductDetailsService, private cartService: CartService) { }
  ngOnInit(): void {
    
  }
  addToCart(product: products) {
    this.cartService.addToCart(product);
  }

}
