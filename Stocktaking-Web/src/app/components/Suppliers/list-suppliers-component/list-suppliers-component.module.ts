import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListSuppliersComponentComponent } from './list-suppliers-component.component';


@NgModule({
  declarations: [
    ListSuppliersComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListSuppliersComponentComponent
  ]
})
export class ListSuppliersComponentModule { }
