import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListUserComponentComponent } from './list-user-component.component';


@NgModule({
  declarations: [
    ListUserComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListUserComponentComponent
  ]
})
export class ListUserComponentModule { }
