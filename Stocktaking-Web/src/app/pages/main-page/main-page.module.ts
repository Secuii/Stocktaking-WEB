import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page.component';
import { AppModule } from './../../app.module';
import { ListClientComponentModule } from 'src/app/components/Clients/list-client-component/list-client-component.module';


@NgModule({
  declarations: 
  [
    MainPageComponent
  ],
  imports: 
  [
    //ListClientComponentModule
  ],
  exports: 
  [
    MainPageComponent
  ]
})
export class MainPageModule { }
