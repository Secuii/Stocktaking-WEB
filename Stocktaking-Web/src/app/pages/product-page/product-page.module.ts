import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { PagesModule } from '../pages.module';
import { ProductPageComponent } from './product-page.component';


@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    //CommonModule,
    //ProductPageRoutingModule,
    PagesModule
  ],
  exports: [
    ProductPageComponent
  ]
})
export class ProductPageModule { }
