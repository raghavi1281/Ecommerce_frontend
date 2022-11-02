import { Component, OnInit } from '@angular/core';
import { products } from '../classes/products';
import { ProductDetailsService } from '../product-details.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {
  product:products = this.productdetails.getDetails();
  editProductForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private productdetails: ProductDetailsService) { }
  
  ngOnInit(): void {
    this.editProductForm = this.formBuilder.group({
      prodID: ['', Validators.required],
      pName: ['', Validators.required],
      Price: ['',Validators.required,],
      stock: ['', Validators.required],
      imgLink: ['', Validators.required],
      pdes: ['', Validators.required]
  });
  }
  get f() { return this.editProductForm.controls; }

    onSubmit() {
    this.submitted = true;
    if (this.editProductForm.invalid) {
        return;
    }
    console.log(this.editProductForm.controls)
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.editProductForm.value))
  }

  

}
