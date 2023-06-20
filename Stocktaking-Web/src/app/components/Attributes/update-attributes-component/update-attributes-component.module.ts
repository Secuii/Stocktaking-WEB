import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateAttributesComponentComponent } from './update-attributes-component.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UpdateAttributesComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    UpdateAttributesComponentComponent
  ]
})
export class UpdateAttributesComponentModule { }
