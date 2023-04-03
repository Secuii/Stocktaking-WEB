import { MainPageComponent } from './main-page.component';
import { ListProductsComponentModule } from './../../components/Products/list-products-component/list-products-component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { PagesModule } from '../pages.module';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    ComponentsModule,
    PagesModule
  ]
})
export class MainPageModule { }
