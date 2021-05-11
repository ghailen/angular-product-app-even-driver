import { EventEdriverService } from './../../../services/event.driver.service';
import { ProductActionsType, ActionEvent } from './../../../state/product.state';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {

  //@Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();
  constructor(private eventEdriverService: EventEdriverService) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    // this.productEventEmitter.emit({type:ProductActionsType.GET_ALL_PRODUCTS});
    this.eventEdriverService.publishEvent({ type: ProductActionsType.GET_ALL_PRODUCTS });
  }
  onGetSelectedProducts() {
    // this.productEventEmitter.emit({type:ProductActionsType.GET_SELECTED_PRODUCTS});
    this.eventEdriverService.publishEvent({ type: ProductActionsType.GET_SELECTED_PRODUCTS });

  }
  onGetAvailableProducts() {
    // this.productEventEmitter.emit({type:ProductActionsType.GET_AVAILABLE_PRODUCTS});
    this.eventEdriverService.publishEvent({ type: ProductActionsType.GET_AVAILABLE_PRODUCTS });

  }

  onSearch(dataForm: any) {
    //  this.productEventEmitter.emit({type:ProductActionsType.SEARCH_PRODUCTS,payload:dataForm});
    this.eventEdriverService.publishEvent({ type: ProductActionsType.SEARCH_PRODUCTS, payload: dataForm });

  }




  onNewProduct() {
    // this.productEventEmitter.emit({type:ProductActionsType.NEW_PRODUCTS});
    this.eventEdriverService.publishEvent({ type: ProductActionsType.NEW_PRODUCTS });


  }




}
