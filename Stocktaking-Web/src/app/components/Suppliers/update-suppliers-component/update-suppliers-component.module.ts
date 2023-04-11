import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UpdateSuppliersComponentComponent } from './update-suppliers-component.component';


@NgModule({
  declarations: [
    UpdateSuppliersComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UpdateSuppliersComponentComponent
  ]
})
export class UpdateSuppliersComponentModule { }
