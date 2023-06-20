import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UpdateUserComponentComponent } from './update-user-component.component';


@NgModule({
  declarations: [
    UpdateUserComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    UpdateUserComponentComponent
  ]
})
export class UpdateUserComponentModule { }
