import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListTypesComponentComponent } from './list-types-component.component';


@NgModule({
  declarations: [
    ListTypesComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListTypesComponentComponent
  ]
})
export class ListTypesComponentModule { }
