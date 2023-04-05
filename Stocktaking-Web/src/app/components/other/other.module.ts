import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other-routing.module';
import { SearchComponentModule } from './search-component/search-component.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OtherRoutingModule,
    SearchComponentModule
  ],
  exports: [
    SearchComponentModule
  ]
})
export class OtherModule { }
