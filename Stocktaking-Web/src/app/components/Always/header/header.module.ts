import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { HeaderComponent } from './header.component';

/*
    Angular tratará la clase como un módulo:
*/
@NgModule
({
    declarations: 
    [
        HeaderComponent
    ],
    imports: 
    [
        CommonModule,
        RouterModule
    ],
    exports: 
    [
        HeaderComponent
    ],
    providers: 
    [

    ],
})

/*
    Exporto la clase:
*/
export class HeaderModule
{
    
}