import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Membership } from 'src/app/entities/membership';
import { StatusPage } from 'src/app/enums/enum-status-page';

@Component
(
    {
        selector: 'app-card-membership-component',
        templateUrl: './card-membership-component.component.html',
        styleUrls: 
        [
            './../../components.css'
        ]
    }
)
export class CardMembershipComponentComponent implements OnInit{ 

    /*
        Eventos:
    */
        @Output() statusPageEvent = new EventEmitter <StatusPage>();
    /*
        Variales:
    */
        @Input() membership? : Membership = new Membership();
        //public membership: Membership;
        public idMembership: number;
    /*
        Constructor
    */
    constructor
    (
        private router: Router,
        private activatedRoute: ActivatedRoute
    )
    {
        this.membership= new Membership();
        this.idMembership = 0;
    }

    
    /*
        Métodos implementados de interfaces:
    */
    ngOnInit(): void 
    {
    }

    /*
        Métodos de enrutamiento
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

