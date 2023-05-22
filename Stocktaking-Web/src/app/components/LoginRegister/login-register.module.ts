import { NgModule } from '@angular/core';
import { LoginComponentModule } from './login-component/login-component.module';
import { RegisterComponentModule } from './register-component/register-component.module';


@NgModule({
    declarations: [],
    imports: [
        LoginComponentModule,
        RegisterComponentModule
    ],
    exports: [
        LoginComponentModule,
        RegisterComponentModule
    ]
})
export class LoginRegisterComponentModule { }
