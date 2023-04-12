import { HeaderModule } from './header/header.module';
import { NgModule } from "@angular/core";
import { FooterModule } from "./footer/footer.module";
import { NavbarModule } from "./navbar/navbar.module";


@NgModule({
    declarations: [],
    imports: [
        FooterModule,
        HeaderModule,
        NavbarModule
    ],
    exports: [
        FooterModule,
        HeaderModule,
        NavbarModule
    ]
  })
  export class OutRoutingComponentModule { }