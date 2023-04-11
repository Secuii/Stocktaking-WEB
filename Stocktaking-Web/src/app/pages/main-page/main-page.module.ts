import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { AppModule } from './../../app.module';


@NgModule({
  declarations: 
  [
    MainPageComponent
  ],
  imports: 
  [
    AppModule
    //PagesModule
  ],
  exports: 
  [
    MainPageComponent
  ]
})
export class MainPageModule { }
