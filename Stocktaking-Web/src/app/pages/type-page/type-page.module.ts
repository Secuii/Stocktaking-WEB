import { NgModule } from '@angular/core';
import { TypePageComponent } from './type-page.component';
import { ListTypesComponentModule } from 'src/app/components/Types/list-types-component/list-types-component.module';


@NgModule({
  declarations: 
  [
    TypePageComponent
  ],
  imports: 
  [
    ListTypesComponentModule
    //AppModule
  ],
  exports: 
  [
    TypePageComponent
  ]
})
export class TypePageModule { }
