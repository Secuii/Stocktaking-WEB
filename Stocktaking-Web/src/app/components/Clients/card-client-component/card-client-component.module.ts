import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardClientComponentComponent } from './card-client-component.component';

//import { CardClientComponentRoutingModule } from './card-client-component-routing.module';


@NgModule({
  declarations: [
    CardClientComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CardClientComponentComponent
  ]
})
export class CardClientComponentModule { }
