import { MainPageComponent } from './main-page.component';
import { ListProductsComponentModule } from './../../components/Products/list-products-component/list-products-component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    ListProductsComponentModule
  ]
})
export class MainPageModule { }
