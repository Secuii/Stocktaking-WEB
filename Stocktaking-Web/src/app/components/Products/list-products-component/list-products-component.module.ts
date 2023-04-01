import { ListProductsComponentComponent } from './list-products-component.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ListProductsComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
   ListProductsComponentComponent
  ]
})
export class ListProductsComponentModule { }
