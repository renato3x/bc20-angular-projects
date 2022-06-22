import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form-dialog',
  templateUrl: './product-form-dialog.component.html',
  styleUrls: ['./product-form-dialog.component.css']
})
export class ProductFormDialogComponent implements OnInit {

  productForm: FormGroup = this.formBuilder.group({
    name: ['', [ Validators.required ]],
    price: ['', [ Validators.required, Validators.min(1) ]],
    picture: ['', [ Validators.required ]]
  })

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }
}
