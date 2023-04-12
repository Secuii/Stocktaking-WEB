import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ListAttributesComponentComponent } from './list-attributes-component.component';


@NgModule({
  declarations: [
    ListAttributesComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ListAttributesComponentComponent
  ]
})
export class ListAttributesComponentModule { }
