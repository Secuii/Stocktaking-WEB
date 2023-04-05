import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UpdateProductsComponentComponent } from './update-products-component.component';


@NgModule({
  declarations: [
    UpdateProductsComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UpdateProductsComponentComponent
  ]
})
export class UpdateProductsComponentModule { }
