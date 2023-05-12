import { NgModule } from '@angular/core';
import { ClientPageComponent } from './client-page.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListClientComponentModule } from 'src/app/components/Clients/list-client-component/list-client-component.module';
import { CardClientComponentModule } from 'src/app/components/Clients/card-client-component/card-client-component.module';
import { UpdateClientComponentModule } from 'src/app/components/Clients/update-client-component/update-client-component.module';


@NgModule({
  declarations: 
  [
    ClientPageComponent
  ],
  imports: 
  [
    RouterModule,
    CommonModule,
    ListClientComponentModule,
    CardClientComponentModule,
    UpdateClientComponentModule
  ],
  exports: 
  [
    ClientPageComponent
  ]
})

export class ClientPageModule 
{

}
