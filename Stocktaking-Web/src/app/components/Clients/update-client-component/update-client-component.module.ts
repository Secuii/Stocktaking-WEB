import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { UpdateClientComponentRoutingModule } from './update-client-component-routing.module';
import { UpdateClientComponentComponent } from './update-client-component.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UpdateClientComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UpdateClientComponentComponent
  ]
})
export class UpdateClientComponentModule { }
