import { NgModule } from '@angular/core';
import { CardPermissionComponentModule } from './card-permission-component/card-permission-component.module';
import { ListPermissionComponentModule } from './list-permission-component/list-permission-component.module';
import { UpdatePermissionComponentModule } from './update-permission-component/update-permission-component.module';


@NgModule({
    declarations: [],
    imports: [
        CardPermissionComponentModule,
        ListPermissionComponentModule,
        UpdatePermissionComponentModule
    ],
    exports: [
        CardPermissionComponentModule,
        ListPermissionComponentModule,
        UpdatePermissionComponentModule
    ]
  })
  export class PermissionComponentModule { }