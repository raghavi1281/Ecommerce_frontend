import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  searchForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: ['']
  });
  }
  get f() { return this.searchForm.controls; }

    onSubmit() {
    this.submitted = true;
    if (this.searchForm.invalid) {
        return;
    }
    console.log(this.searchForm.controls)
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.searchForm.value))
  }

}
