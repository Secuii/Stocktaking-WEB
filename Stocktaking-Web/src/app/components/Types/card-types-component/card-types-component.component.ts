import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Type } from 'src/app/entities/type';
import { StatusPage } from 'src/app/enums/enum-status-page';


@Component
(
    {
        selector: 'app-card-types-component',
        templateUrl: './card-types-component.component.html',
        styleUrls: 
        [
            './../../components.css'
        ]
    }
)

export class CardTypesComponentComponent implements OnInit, OnDestroy
{
    /*
        Eventos:
    */
    @Output() statusPageEvent = new EventEmitter <StatusPage>();

    /*
        Variales:
    */
    @Input() type? : Type = new Type();
    public idTypes: number;
    
    /*
    Constructor
    */
    constructor
    (
        private router: Router,
        private activatedRoute: ActivatedRoute
    )
    {
        this.type= new Type();
        this.idTypes = 0;
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

    /*
        Métodos de Estados
    */
    public goBackBtn() 
    {
        this.changeStatusPage(StatusPage.ReadAll);
    }

    private changeStatusPage (newStatusPage : StatusPage)
    {
        this.statusPageEvent.emit(newStatusPage);
    }
}
