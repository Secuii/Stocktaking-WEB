import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UpdateTypesComponentComponent } from './update-types-component.component';


@NgModule({
  declarations: [
    UpdateTypesComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UpdateTypesComponentComponent
  ]
})
export class UpdateTypesComponentModule { }
