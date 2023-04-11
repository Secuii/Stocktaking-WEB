import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UpdatePermissionComponentComponent } from './update-permission-component.component';


@NgModule({
  declarations: [
    UpdatePermissionComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UpdatePermissionComponentComponent
  ]
})
export class UpdatePermissionComponentModule { }
