import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UpdateSuppliersComponentComponent } from './update-suppliers-component.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateSuppliersComponentComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    UpdateSuppliersComponentComponent
  ]
})
export class UpdateSuppliersComponentModule { }
