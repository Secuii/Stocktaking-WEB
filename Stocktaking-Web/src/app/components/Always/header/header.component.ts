
import { Component, OnInit, OnDestroy } from '@angular/core';

/*
    Angular tratará la clase como un componente:
*/
@Component
({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: 
    [
        './../../components.css'
    ],
    providers: 
    [
    ]
})

/*
    Exporto la clase:
*/
export class HeaderComponent implements OnInit, OnDestroy
{
    /*
        Variables:
    */

    /*
        Costructor:
    */
    constructor()
    {

    }

    /*
        Métodos implementados de interfaces:
    */
    ngOnInit(): void 
    {
        
    }

    ngOnDestroy(): void 
    {
        
    }
    


}