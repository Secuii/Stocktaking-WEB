import { ProductAttribute } from './../../../entities/productAttribute';
import { Product } from './../../../entities/product';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { StatusPage } from 'src/app/enums/enum-status-page';
import { ProductService } from 'src/app/services/product.service';
import { ApiResponse } from 'src/app/entities-response/apiResponse';


@Component
(
    {
        selector: 'app-card-products-component',
        templateUrl: './card-products-component.component.html',
        styleUrls: 
        [
            './../../components.css'
        ],
        providers:
        [
            ProductService
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
    

    public apiResponseProductAttribute : ApiResponse<Array<ProductAttribute>>;
    public idProducts: number;

    public listProductAttribute : Array<ProductAttribute>;
    
    /*
    Constructor
    */
    constructor
    (
        private productsService : ProductService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    )
    {
        this.product= new Product();
        this.idProducts = 0;
        this.apiResponseProductAttribute = new ApiResponse<Array<ProductAttribute>>();
        this.listProductAttribute = new Array<ProductAttribute>();
    }


    /*
        Métodos implementados de interfaces:
    */
    ngOnInit(): void 
    {
        if (this.product)
        {
            this.productsService.readProductAttribute(this.product.id).subscribe
            (
                response => 
                {
                    this.apiResponseProductAttribute = response;
                    if (this.apiResponseProductAttribute.response)
                    {
                        this.listProductAttribute = this.apiResponseProductAttribute.response;
                    }
                }
            )

        }
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
