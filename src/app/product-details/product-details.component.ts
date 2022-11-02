import { Component, OnInit } from '@angular/core';
import { products } from '../classes/products';
import { ProductDetailsService } from '../product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product = this.productdetails.getDetails();
  constructor(private productdetails: ProductDetailsService) { }

  ngOnInit(): void {
  }
  
  giveDetails(product: products)
  {
    this.productdetails.giveDetails(product);
  }
}
