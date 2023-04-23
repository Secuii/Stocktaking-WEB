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
    //PagesModule
  ],
  exports: 
  [
    ProductPageComponent
  ]
})
export class ProductPageModule { }
