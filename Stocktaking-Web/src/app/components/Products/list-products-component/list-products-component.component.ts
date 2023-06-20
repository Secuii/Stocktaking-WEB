import { Product } from './../../../entities/product';
import { ProductService } from './../../../services/product.service';
import { StatusPage } from './../../../enums/enum-status-page';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteResponse } from 'src/app/entities-response/delete-response';
import { MyRoutingService } from 'src/app/services/my.routing.service';
import { ApiResponse } from 'src/app/entities-response/apiResponse';

@Component
(
    {
        selector: 'app-list-products-component',
        templateUrl: './list-products-component.component.html',
        styleUrls: 
        [
            './../../components.css'
        ],
        providers:
        [
            ProductService,
            MyRoutingService
        ]
    }
)
export class ListProductsComponentComponent implements OnInit, OnDestroy
{
    /*
        Eventos:
    */
    @Output() statusPageEvent = new EventEmitter <StatusPage>();
    @Output() selectProductEvent = new EventEmitter <Product>();

    /*
        Variales:
    */
        public allDatas: ApiResponse<Product[]> | undefined;
        public allEntities : Product[] | undefined;
    

    /*
    Constructor
    */
    constructor
    (
        private productsService : ProductService,
        private router: Router,
        private myRouringService : MyRoutingService
    )
    {
        this.allDatas = new ApiResponse<Product[]>();
        this.allEntities = new Array<Product>();
    }

    ngOnInit(): void 
    {
        this.productsService.readAllProducts().subscribe
        (
            response => 
            {
                this.allDatas = response;
                this.allEntities = this.allDatas.response;
            }
        )
    }

    ngOnDestroy(): void 
    {
    }


    /*
        Métodos de Estados
    */

    public createProductBtn() 
    {
        this.selectProduct(new Product());
        this.changeStatusPage(StatusPage.Create);
    }

    public showProductBtn(productOfList: Product): void
    {
        this.selectProduct(productOfList);
        this.changeStatusPage(StatusPage.ReadOne);
    }

    public updateProductBtn(productOfList: Product): void
    {
        this.selectProduct(productOfList);
        this.changeStatusPage(StatusPage.Update);
    }

    public deleteProductBtn(productOfList: Product): void
    {
        let idOfList : number = productOfList.id;
        let responseDelete : ApiResponse<Product>;
        this.selectProduct(productOfList);

        this.productsService.deleteProduct(idOfList).subscribe
        (
            response => 
            {
                responseDelete = response;
                alert (responseDelete.response);
            }
        )
        this.myRouringService.reloadCurrentRoute(this.router);
    }

    public changeStatusPage (newStatusPage : StatusPage)
    {
        this.statusPageEvent.emit(newStatusPage);
    }

    public selectProduct (newtypeSelected : Product)
    {
        this.selectProductEvent.emit(newtypeSelected);
    }

    /*
        Métodos de orden de los datos
    */
    public orderById() : void
    {
    }

    public orderByName() : void
    {
    }

    public orderByStock() : void
    {

    }

    public orderByType() : void
    {

    }

    
}
