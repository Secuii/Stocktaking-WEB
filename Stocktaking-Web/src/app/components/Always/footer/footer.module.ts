import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FooterComponent } from './footer.component';

/*
    Angular tratará la clase como un módulo:
*/
@NgModule
({
    declarations: 
    [
        FooterComponent
    ],
    imports: 
    [
        CommonModule,
        RouterModule
    ],
    exports: 
    [
        FooterComponent
    ],
    providers: 
    [

    ],
})

/*
    Exporto la clase:
*/
export class FooterModule
{
    
}