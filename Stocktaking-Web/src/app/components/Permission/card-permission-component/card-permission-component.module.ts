import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardPermissionComponentComponent } from './card-permission-component.component';


@NgModule({
  declarations: [
    CardPermissionComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardPermissionComponentComponent
  ]
})
export class CardPermissionComponentModule { }
