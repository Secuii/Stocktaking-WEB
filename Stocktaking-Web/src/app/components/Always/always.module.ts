import { NgModule } from "@angular/core";
import { FooterModule } from "./footer/footer.module";
import { HeaderModule } from "./header/header.module";
import { NavbarModule } from "./navbar/navbar.module";

@NgModule
({
    declarations: 
    [

    ],
    imports: 
    [
        HeaderModule,
        NavbarModule,
        FooterModule
    ],
    exports: 
    [
        HeaderModule,
        NavbarModule,
        FooterModule
    ],
    providers: 
    [

    ],
})

/*
    Exporto la clase:
*/
export class AlwaysModules
{
    
}