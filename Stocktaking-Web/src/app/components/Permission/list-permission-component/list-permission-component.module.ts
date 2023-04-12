import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListPermissionComponentComponent } from './list-permission-component.component';


@NgModule({
  declarations: [
    ListPermissionComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListPermissionComponentComponent
  ]
})
export class ListPermissionComponentModule { }
