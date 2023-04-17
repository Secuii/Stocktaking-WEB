import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListClientComponentComponent } from './list-client-component.component';


@NgModule({
  declarations: 
  [
    ListClientComponentComponent
  ],
  imports: 
  [
    CommonModule,
    RouterModule
  ],
  exports: 
  [
    ListClientComponentComponent
  ]
  
})
export class ListClientComponentModule 
{ 
  
}
