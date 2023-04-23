
import { Component, OnInit, OnDestroy } from '@angular/core';

/*
    Angular tratará la clase como un componente:
*/
@Component
({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
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
export class FooterComponent implements OnInit, OnDestroy
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