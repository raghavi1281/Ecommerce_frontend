import { Component, OnInit } from '@angular/core';
import { freeApiService } from '../services/freeapi.service';
import { products } from '../classes/products';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  productslist!: products[];

  constructor(private _freeapiservice: freeApiService) { }

  ngOnInit(): void {
    
   /* this._freeapiservice.getProductdetails(id).subscribe(
      data=>
      {
          this.productslist = data;
      }
    )*/
  }

}
