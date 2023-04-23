import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NgModule } from "@angular/core";

/*
    Angular tratará la clase como un módulo:
*/
@NgModule
({
    declarations: 
    [
        NavbarComponent
    ],
    imports: 
    [
        CommonModule,
        RouterModule
    ],
    exports: 
    [
        NavbarComponent
    ],
    providers: 
    [

    ],
})

/*
    Exporto la clase:
*/
export class NavbarModule
{
    
}