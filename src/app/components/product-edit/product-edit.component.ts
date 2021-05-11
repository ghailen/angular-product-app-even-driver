import { ProductService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventEdriverService } from 'src/app/services/event.driver.service';
import { ProductActionsType } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId: number;
  submitted: boolean = false;
  productFormGroup?: FormGroup;

  constructor(private eventDriverService:EventEdriverService, private fb: FormBuilder, private activatedRoute: ActivatedRoute, private ProductService: ProductService) {
    this.productId = activatedRoute.snapshot.params.id;

  }

  ngOnInit(): void {
    this.ProductService.getProducts(this.productId).subscribe(data => {
      this.productFormGroup= this.fb.group({
        id: [{value: data.id, disabled: false},Validators.required],
        name: [data.name, Validators.required],
        price: [data.price, Validators.required],
        quantity: [data.quantity, Validators.required],
        selected: [data.selected, Validators.required],
        available: [data.available, Validators.required]
      });
    })
  }


  onUpdateProduct() {
    this.ProductService.updateProducts(this.productFormGroup?.value).subscribe(data => {
      this.eventDriverService.publishEvent({type:ProductActionsType.PRODUCT_ADDED})

      alert("Success Product Updated");
    });

  }
}


