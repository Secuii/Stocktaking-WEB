import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UpdateProductsComponentComponent } from './update-products-component.component';
import { FormsModule } from '@angular/forms';

@NgModule
(
  {
    declarations: 
    [
      UpdateProductsComponentComponent
    ],
    imports: 
    [
      FormsModule,
      CommonModule,
      RouterModule
    ],
    exports: 
    [
      UpdateProductsComponentComponent
    ]
  }
)
export class UpdateProductsComponentModule 
{ 
  
}
