import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { products } from '../classes/products';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  /*product: products | undefined;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.product = productslist.find((product: { id: number; }) => product.id === productIdFromRoute);

    
  }*/
  ngOnInit(): void {
    
  }

}
