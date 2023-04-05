import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { PagesModule } from '../pages.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    PagesModule
  ]
})
export class ProductPageModule { }
