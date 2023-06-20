import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesModule } from '../pages.module';
import { SearchComponentComponent } from 'src/app/components/other/search-component/search-component.component';
import { AppModule } from 'src/app/app.module';
import { SearchPageComponent } from './search-page.component';


@NgModule({
  declarations: [
    SearchPageComponent
  ],
  imports: [
    //CommonModule,
    //SearchPageRoutingModule,
    AppModule
  ],
  exports: [
    SearchPageComponent
  ]
})
export class SearchPageModule { }
