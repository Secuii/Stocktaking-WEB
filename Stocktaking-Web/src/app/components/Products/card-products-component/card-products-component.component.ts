import { Product } from './../../../entities/product';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { StatusPage } from 'src/app/enums/enum-status-page';


@Component
(
    {
        selector: 'app-card-products-component',
        templateUrl: './card-products-component.component.html',
        styleUrls: 
        [
            './../../components.css'
        ]
    }
)

export class CardProductsComponentComponent implements OnInit, OnDestroy
{
    /*
        Eventos:
    */
    @Output() statusPageEvent = new EventEmitter <StatusPage>();

    /*
        Variales:
    */
    @Input() product? : Product = new Product();
    public idProducts: number;
    
    /*
    Constructor
    */
    constructor
    (
        private router: Router,
        private activatedRoute: ActivatedRoute
    )
    {
        this.product= new Product();
        this.idProducts = 0;
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
