import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  newProductForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.newProductForm = this.formBuilder.group({
      prodID: ['', Validators.required],
      pName: ['', Validators.required],
      Price: ['',Validators.required,],
      stock: ['', Validators.required],
      imgLink: ['', Validators.required],
      pdes: ['', Validators.required]
  });
  }
  get f() { return this.newProductForm.controls; }

    onSubmit() {
    this.submitted = true;
    if (this.newProductForm.invalid) {
        return;
    }
    console.log(this.newProductForm.controls)
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.newProductForm.value))
  }

}
