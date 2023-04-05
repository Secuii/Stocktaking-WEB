import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { PagesModule } from '../pages.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    PagesModule
  ]
})
export class SearchPageModule { }
