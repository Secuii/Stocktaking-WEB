import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardSuppliersComponentComponent } from './card-suppliers-component.component';


@NgModule({
  declarations: [
    CardSuppliersComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardSuppliersComponentComponent
  ]
})
export class CardSuppliersComponentModule { }
