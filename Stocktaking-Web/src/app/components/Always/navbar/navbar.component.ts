//import { LoginCookiesController } from '../../cookies/loginCookiesService';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
//import { LoginService } from './../../services/login.service';


/*
    Angular tratará la clase como un componente:
*/
@Component
    ({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls:
            [
                './../../components.css'
            ], // Url del css
        providers:
            [
                LoginService
                //LoginCookiesController
            ]
    })

/*
    Exporto la clase:
*/
export class NavbarComponent implements OnInit, OnDestroy {
    /*
        Variables:
    */
    //public loginStatus: string;
    //public urlForOffers: string;
    /*
        Costructor:
    */
    constructor(private loginService: LoginService) {
    }

    /*
        Métodos implementados de interfaces:
    */
    ngOnInit(): void {
        //     this.loginService.logOut();
    }

    ngOnDestroy(): void {

    }

    /*
        Método isLoged:
            Entradas: Ninguna
            Objetivo: Saber si hay login.
            Salidas: Booleana. (true: Sí hay login. | false: No hay login)
    */
    public isLoged(): boolean {
        return this.loginService.isLoged();
    }

    /*
        Método logOut:
            Entradas: Ninguna
            Objetivo: Cerrar la sesión.
            Salidas: ninguna.
    */
    public logOut(): void {
        this.loginService.logOut();
    }
}