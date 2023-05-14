import { StatusPage } from './../../../enums/enum-status-page';

import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteResponse } from 'src/app/entities-response/delete-response';
import { Permission } from 'src/app/entities/permission';
import { MyRoutingService } from 'src/app/services/my.routing.service';

import { PermissionService } from 'src/app/services/permissions.service';


@Component
    (
        {
            selector: 'app-list-permission-component',
            templateUrl: './list-permission-component.component.html',
            styleUrls:
                [
                    './../../components.css'
                ],
            providers:
                [
                    PermissionService,
                    MyRoutingService
                ]
        }
    )
export class ListPermissionComponentComponent implements OnInit, OnDestroy {
    /*
        Eventos:
    */
    @Output() statusPageEvent = new EventEmitter<StatusPage>();
    @Output() selectPermissionEvent = new EventEmitter<Permission>();

    /*
        Variales:
    */
    public allDatas: Array<Permission>;


    /*
    Constructor
    */
    constructor
        (
            private permissionService: PermissionService,
            private router: Router,
            private myRouringService: MyRoutingService
        ) {
        this.allDatas = new Array<Permission>;
    }

    ngOnInit(): void {
        this.permissionService.readAllPermissions().subscribe
            (
                response => {
                    this.allDatas = response;
                }
            )
    }

    ngOnDestroy(): void {
    }


    /*
        Métodos de Estados
    */

    public createPermissionBtn() {
        this.selectPermission(new Permission());
        this.changeStatusPage(StatusPage.Create);
    }

    public showPermissionBtn(permissionOfList: Permission): void {
        this.selectPermission(permissionOfList);
        this.changeStatusPage(StatusPage.ReadOne);
    }

    public updatePermissionBtn(permissionOfList: Permission): void {
        this.selectPermission(permissionOfList);
        this.changeStatusPage(StatusPage.Update);
    }

    public deletePermissionBtn(permissionOfList: Permission): void {
        let idOfList: number = permissionOfList.id;
        let responseDelete: DeleteResponse;
        this.selectPermission(permissionOfList);

        this.permissionService.deletePermission(idOfList).subscribe
            (
                response => {
                    responseDelete = response;
                    alert(responseDelete.response);
                }
            )
        this.myRouringService.reloadCurrentRoute(this.router);
    }

    public changeStatusPage(newStatusPage: StatusPage) {
        this.statusPageEvent.emit(newStatusPage);
    }

    public selectPermission(newpermissionelected: Permission) {
        this.selectPermissionEvent.emit(newpermissionelected);
    }

    /*
        Métodos de orden de los datos
    */
    public orderById(): void {
    }

    public orderByName(): void {
    }

    public orderByPrice(): void {

    }


}
