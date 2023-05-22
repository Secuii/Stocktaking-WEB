import { StatusPage } from './../../../enums/enum-status-page';

import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/entities-response/apiResponse';
import { DeleteResponse } from 'src/app/entities-response/delete-response';
import { Type } from 'src/app/entities/type';
import { MyRoutingService } from 'src/app/services/my.routing.service';

import { TypeService } from 'src/app/services/types.service';


@Component
(
    {
        selector: 'app-list-types-component',
        templateUrl: './list-types-component.component.html',
        styleUrls: 
        [
            './../../components.css'
        ],
        providers:
        [
            TypeService,
            MyRoutingService
        ]
    }
)
export class ListTypesComponentComponent implements OnInit, OnDestroy
{
    /*
        Eventos:
    */
    @Output() statusPageEvent = new EventEmitter <StatusPage>();
    @Output() selectTypeEvent = new EventEmitter <Type>();

    /*
        Variales:
    */
    public allDatas: ApiResponse<Type[]> | undefined;
    public allEntities : Array<Type> | undefined;

    /*
    Constructor
    */
    constructor
    (
        private typesService : TypeService,
        private router: Router,
        private myRouringService : MyRoutingService
    )
    {
        this.allDatas = new ApiResponse<Type[]> ();
        this.allEntities = new Array<Type>();
    }

    ngOnInit(): void 
    {
        this.typesService.readAllTypes().subscribe
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

    public createTypeBtn() 
    {
        this.selectType(new Type());
        this.changeStatusPage(StatusPage.Create);
    }

    public showTypeBtn(typeOfList: Type): void
    {
        this.selectType(typeOfList);
        this.changeStatusPage(StatusPage.ReadOne);
    }

    public updateTypeBtn(typeOfList: Type): void
    {
        this.selectType(typeOfList);
        this.changeStatusPage(StatusPage.Update);
    }

    public deleteTypeBtn(typeOfList: Type): void
    {
        let idOfList : number = typeOfList.id;
        let responseDelete : ApiResponse<Type>;
        this.selectType(typeOfList);

        this.typesService.deleteType(idOfList).subscribe
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

    public selectType (newtypeSelected : Type)
    {
        this.selectTypeEvent.emit(newtypeSelected);
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

    public orderByPrice() : void
    {

    }

    
}
