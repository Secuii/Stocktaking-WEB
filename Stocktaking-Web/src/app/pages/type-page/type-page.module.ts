import { NgModule } from '@angular/core';
import { TypePageComponent } from './type-page.component';
import { ListTypesComponentModule } from 'src/app/components/Types/list-types-component/list-types-component.module';
import { CardTypesComponentModule } from 'src/app/components/Types/card-types-component/card-types-component.module';
import { UpdateTypesComponentModule } from 'src/app/components/Types/update-types-component/update-types-component.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: 
  [
    TypePageComponent
  ],
  imports: 
  [
    RouterModule,
    CommonModule,
    ListTypesComponentModule,
    CardTypesComponentModule,
    UpdateTypesComponentModule
  ],
  exports: 
  [
    TypePageComponent
  ]
})
export class TypePageModule { }
