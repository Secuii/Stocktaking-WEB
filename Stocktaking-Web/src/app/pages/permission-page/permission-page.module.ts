import { ListPermissionComponentModule } from './../../components/Permission/list-permission-component/list-permission-component.module';
import { NgModule } from '@angular/core';
import { PermissionPageComponent } from './permission-page.component';

@NgModule({
  declarations: 
  [
    PermissionPageComponent
  ],
  imports: 
  [
    ListPermissionComponentModule
  ],
  exports: 
  [
    PermissionPageComponent
  ]
})
export class PermissionPageModule { }
