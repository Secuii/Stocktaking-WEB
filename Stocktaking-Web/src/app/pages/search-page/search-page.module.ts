import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { PagesModule } from '../pages.module';
import { SearchComponentComponent } from 'src/app/components/other/search-component/search-component.component';
import { AppModule } from 'src/app/app.module';


@NgModule({
  declarations: [
    SearchComponentComponent
  ],
  imports: [
    //CommonModule,
    //SearchPageRoutingModule,
    AppModule
  ],
  exports: [
    SearchComponentComponent
  ]
})
export class SearchPageModule { }
