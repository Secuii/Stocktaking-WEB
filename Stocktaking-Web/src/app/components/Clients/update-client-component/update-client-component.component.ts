import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ClientForm } from 'src/app/entities-form/client-form';
import { Client } from 'src/app/entities/client';
import { StatusPage } from 'src/app/enums/enum-status-page';
import { ClientService } from 'src/app/services/client.service';
import { MyRoutingService } from 'src/app/services/my.routing.service';

@Component
(
  {
    selector: 'app-update-client-component',
    templateUrl: './update-client-component.component.html',
    styleUrls: 
    [
      './../../components.css'
    ],
    providers:
    [
        ClientService,
        MyRoutingService
    ]
  }
)
export class UpdateClientComponentComponent implements OnInit, OnDestroy
{
  /*
    Eventos
  */
    @Output() statusPageEvent = new EventEmitter <StatusPage>();

    /*
      Variables
    */
    @Input() client? : Client = new Client();
    public clientForm : ClientForm
    public workClient : Client;
  
    /*
      Constructor
      this.myRoutingService.reloadCurrentRoute(this.router);
    */
    constructor
    (
      private clientService : ClientService,
      private myRoutingService : MyRoutingService,
      private router : Router
    )
    {
      this.clientForm = new ClientForm();
      this.workClient = new Client();
    }
    
    /*
      Métodos implementados de interfaces
    */
    ngOnInit(): void 
    {
      if(this.client != undefined)
      {
        if(this.client.id != -1)
        {
          //this.workClient = this.client;
          this.workClient.id = this.client.id;
          this.workClient.name = this.client.name;
          this.workClient.lastName = this.client.lastName;
          this.workClient.secondLastName = this.client.secondLastName;
          this.workClient.age = this.client.age;
  
          this.clientForm.id = this.client.id;
        }
        else
        {
        }
        
      }
      this.resetForm();
    }
  
    ngOnDestroy(): void 
    {
  
    }
  
    /*
      Métodos de Botones
    */
    public goBackBtn()
    {
      this.changeStatusPage(StatusPage.ReadAll);
    }
  
    public sendDatasBtn(formData : ClientForm)
    {
  
    }
  
    /*
      Métodos de estados
    */
    private changeStatusPage (newStatusPage : StatusPage)
    {
      this.statusPageEvent.emit(newStatusPage);
    }
  
    /*
      Métodos de formulario
    */
    public submitSendDatas (clientForm : ClientForm)
    {
      // Si el ID de Client = 0 (Por defecto) -> Crear
      if (this.workClient.id == -1)
      {
        this.clientService.createClient(this.clientForm).subscribe
        (
          response => 
          {
            alert("Client created");
          }
        )
      }
      else // Si el ID de Client != 0 (Existe) -> Udate
      {
        this.mapperClient(); // Mapeamos el workClient(Client) al formulario(ClientForm)
        this.clientService.updateClient(this.workClient).subscribe
        (
          response => 
          {
            alert("Client modified");
          }
        )
      }
      this.changeStatusPage(StatusPage.ReadAll);
      this.myRoutingService.reloadCurrentRoute(this.router);
    }
  
    private mapperClient () : void
    {
      this.workClient.name = this.clientForm.name;
      this.workClient.lastName = this.clientForm.lastName;
      this.workClient.secondLastName = this.clientForm.secondLastName;
      this.workClient.age = this.clientForm.age;
    }
  
    public resetForm()
    {
      this.clientForm.name = this.workClient.name;
      this.clientForm.lastName = this.workClient.lastName;
      this.clientForm.secondLastName = this.workClient.secondLastName;
      this.clientForm.age = this.workClient.age;
    }
}
