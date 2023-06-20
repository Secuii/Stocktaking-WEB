import { NgModule } from '@angular/core';
import { PermissionPageComponent } from './permission-page.component';
import { ListPermissionComponentModule } from 'src/app/components/Permission/list-permission-component/list-permission-component.module';
import { CardPermissionComponentModule } from 'src/app/components/Permission/card-permission-component/card-permission-component.module';
import { UpdatePermissionComponentModule } from 'src/app/components/Permission/update-permission-component/update-permission-component.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations:
    [
      PermissionPageComponent
    ],
  imports:
    [
      RouterModule,
      CommonModule,
      ListPermissionComponentModule,
      CardPermissionComponentModule,
      UpdatePermissionComponentModule
    ],
  exports:
    [
      PermissionPageComponent
    ]
})
export class PermissionPageModule { }
