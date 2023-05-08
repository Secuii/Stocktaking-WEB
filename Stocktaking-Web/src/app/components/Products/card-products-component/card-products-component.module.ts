import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardProductsComponentComponent } from './card-products-component.component';


@NgModule({
  declarations: [
      CardProductsComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardProductsComponentComponent
  ]
})
export class CardProductsComponentModule { }
