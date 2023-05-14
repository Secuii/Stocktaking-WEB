import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UpdatePermissionComponentComponent } from './update-permission-component.component';


@NgModule({
  declarations: [
    UpdatePermissionComponentComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    UpdatePermissionComponentComponent
  ]
})
export class UpdatePermissionComponentModule { }
