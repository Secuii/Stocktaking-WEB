import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdateProductsComponentModule } from './../../components/Products/update-products-component/update-products-component.module';
import { CardProductsComponentModule } from './../../components/Products/card-products-component/card-products-component.module';
import { ListProductsComponentModule } from './../../components/Products/list-products-component/list-products-component.module';
import { NgModule } from '@angular/core';
import { PagesModule } from '../pages.module';
import { ProductPageComponent } from './product-page.component';


@NgModule({
  declarations: 
  [
    ProductPageComponent
  ],
  imports: 
  [
    RouterModule,
    CommonModule,
    ListProductsComponentModule, 
    CardProductsComponentModule,
    UpdateProductsComponentModule,
    FormsModule
  ],
  exports: 
  [
    ProductPageComponent
  ]
})
export class ProductPageModule { }
