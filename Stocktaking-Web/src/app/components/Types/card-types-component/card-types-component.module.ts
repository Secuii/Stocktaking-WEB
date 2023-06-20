import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardTypesComponentComponent } from './card-types-component.component';


@NgModule({
  declarations: [
      CardTypesComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardTypesComponentComponent
  ]
})
export class CardTypesComponentModule { }
