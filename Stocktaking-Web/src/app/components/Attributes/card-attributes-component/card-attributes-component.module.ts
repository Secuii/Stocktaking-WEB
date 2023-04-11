import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardAttributesComponentComponent } from './card-attributes-component.component';

@NgModule({
  declarations: [
    CardAttributesComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CardAttributesComponentComponent
  ]
})
export class CardAttributesComponentModule { }
