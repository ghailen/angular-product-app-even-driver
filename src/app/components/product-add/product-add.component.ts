import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEdriverService } from 'src/app/services/event.driver.service';
import { ProductService } from 'src/app/services/products.service';
import { ProductActionsType } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productFormGroup: FormGroup;
submitted:boolean=false;

  constructor(private eventDriverService:EventEdriverService, private fb: FormBuilder, private productService: ProductService) {
    this.productFormGroup = this.fb.group({
      name: ["", Validators.required],
      price: [0, Validators.required],
      quantity: [0, Validators.required],
      selected: [true, Validators.required],
      available: [true, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSaveProduct() {
    this.submitted=true;
    if (this.productFormGroup.invalid) return;
    this.productService.saveProduct(this.productFormGroup.value).subscribe(data=>{
     this.eventDriverService.publishEvent({type:ProductActionsType.PRODUCT_ADDED})
      alert("success saving product");
    });
  }

}
