import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListProductsComponentComponent } from './list-products-component.component';


@NgModule({
  declarations: [
    ListProductsComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListProductsComponentComponent
  ]
})
export class ListProductsComponentModule { }
