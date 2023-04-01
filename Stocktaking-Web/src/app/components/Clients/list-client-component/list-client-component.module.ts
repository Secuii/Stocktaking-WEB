import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListClientComponentComponent } from './list-client-component.component';

//import { ListClientComponentRoutingModule } from './list-client-component-routing.module';


@NgModule({
  declarations: [
    ListClientComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    //ListClientComponentRoutingModule
  ],
  exports: [
    ListClientComponentComponent
  ]
})
export class ListClientComponentModule { }
