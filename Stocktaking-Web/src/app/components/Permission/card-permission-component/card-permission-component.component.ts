import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Permission } from 'src/app/entities/permission';
import { StatusPage } from 'src/app/enums/enum-status-page';


@Component
    (
        {
            selector: 'app-card-permission-component',
            templateUrl: './card-permission-component.component.html',
            styleUrls:
                [
                    './../../components.css'
                ]
        }
    )

export class CardPermissionComponentComponent implements OnInit, OnDestroy {
    /*
        Eventos:
    */
    @Output() statusPageEvent = new EventEmitter<StatusPage>();

    /*
        Variales:
    */
    @Input() permission?: Permission = new Permission();
    public idPermission: number;

    /*
    Constructor
    */
    constructor
        (
            private router: Router,
            private activatedRoute: ActivatedRoute
        ) {
        this.permission = new Permission();
        this.idPermission = 0;
    }


    /*
        Métodos implementados de interfaces:
    */
    ngOnInit(): void {

    }

    ngOnDestroy(): void {

    }

    /*
        Métodos de Estados
    */
    public goBackBtn() {
        this.changeStatusPage(StatusPage.ReadAll);
    }

    private changeStatusPage(newStatusPage: StatusPage) {
        this.statusPageEvent.emit(newStatusPage);
    }
}

