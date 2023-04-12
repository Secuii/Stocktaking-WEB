import { NgModule } from '@angular/core';
import { CardUserComponentModule } from './card-user-component/card-user-component.module';
import { ListUserComponentModule } from './list-user-component/list-user-component.module';
import { UpdateUserComponentModule } from './update-user-component/update-user-component.module';

@NgModule({
    declarations: [],
    imports: [
        CardUserComponentModule,
        ListUserComponentModule,
        UpdateUserComponentModule
    ],
    exports: [
        CardUserComponentModule,
        ListUserComponentModule,
        UpdateUserComponentModule
    ]
  })
  export class UserComponentModule { }
  