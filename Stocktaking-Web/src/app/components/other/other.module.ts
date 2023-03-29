import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other-routing.module';
import { SearchComponentComponent } from './search-component/search-component.component';


@NgModule({
  declarations: [
    SearchComponentComponent
  ],
  imports: [
    CommonModule,
    OtherRoutingModule
  ]
})
export class OtherModule { }
