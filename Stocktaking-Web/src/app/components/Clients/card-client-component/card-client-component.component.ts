import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/entities/client';
import { StatusPage } from 'src/app/enums/enum-status-page';

@Component
(
  {
    selector: 'app-card-client-component',
    templateUrl: './card-client-component.component.html',
    styleUrls: 
    [
        './../../components.css'
    ]
  }
)
export class CardClientComponentComponent implements OnInit, OnDestroy
{

  /*
        Eventos:
    */
        @Output() statusPageEvent = new EventEmitter <StatusPage>();

        /*
            Variales:
        */
        @Input() client? : Client = new Client();
        public idClients: number;
        
        /*
        Constructor
        */
        constructor
        (
            private router: Router,
            private activatedRoute: ActivatedRoute
        )
        {
            this.client= new Client();
            this.idClients = 0;
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
