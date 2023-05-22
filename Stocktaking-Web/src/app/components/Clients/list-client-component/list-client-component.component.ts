import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/entities-response/apiResponse';
import { DeleteResponse } from 'src/app/entities-response/delete-response';
import { Client } from 'src/app/entities/client';
import { StatusPage } from 'src/app/enums/enum-status-page';
import { ClientService } from 'src/app/services/client.service';
import { MyRoutingService } from 'src/app/services/my.routing.service';

@Component
(
  {
    selector: 'app-list-client-component',
    templateUrl: './list-client-component.component.html',
    styleUrls: ['./../../components.css'],
    providers:
    [
        ClientService,
        MyRoutingService
    ]
  }
)
export class ListClientComponentComponent implements OnInit, OnDestroy
{

 /*
        Eventos:
    */
        @Output() statusPageEvent = new EventEmitter <StatusPage>();
        @Output() selectClientEvent = new EventEmitter <Client>();
    
        /*
            Variales:
        */
        public allDatas : ApiResponse<Client[]> | undefined;
        public allEntities :  Array<Client> | undefined;
    
        /*
        Constructor
        */
        constructor
        (
            private clientsService : ClientService,
            private router: Router,
            private myRouringService : MyRoutingService
        )
        {
            this.allDatas = new ApiResponse<Client[]>();
            this.allEntities = new Array<Client>();
        }
    
        ngOnInit(): void 
        {
            this.clientsService.readAllClients().subscribe
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
    
        public createClientBtn() 
        {
            this.selectClient(new Client());
            this.changeStatusPage(StatusPage.Create);
        }
    
        public showClientBtn(clientOfList: Client): void
        {
            this.selectClient(clientOfList);
            this.changeStatusPage(StatusPage.ReadOne);
        }
    
        public updateClientBtn(clientOfList: Client): void
        {
            this.selectClient(clientOfList);
            this.changeStatusPage(StatusPage.Update);
        }
    
        public deleteClientBtn(clientOfList: Client): void
        {
            let idOfList : number = clientOfList.id;
            let responseDelete : ApiResponse<Client>;
            this.selectClient(clientOfList);
    
            this.clientsService.deleteClient(idOfList).subscribe
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
    
        public selectClient (newclientSelected : Client)
        {
            this.selectClientEvent.emit(newclientSelected);
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
    
        public orderByLastName() : void
        {
    
        }

        public orderBySecondLastName() : void
        {
    
        }

        public orderByAge() : void
        {
    
        }
    
    

}
