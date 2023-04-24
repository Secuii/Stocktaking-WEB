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
    ListProductsComponentModule, 
  ],
  exports: 
  [
    ProductPageComponent
  ]
})
export class ProductPageModule { }
