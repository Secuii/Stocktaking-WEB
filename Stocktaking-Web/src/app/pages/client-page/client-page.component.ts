import { Component, OnDestroy, OnInit } from '@angular/core';
import { Client } from 'src/app/entities/client';
import { StatusPage } from 'src/app/enums/enum-status-page';

@Component
(
  {
    selector: 'app-client-page',
    templateUrl: './client-page.component.html',
    styleUrls: ['../pages.css']
  }
)
export class ClientPageComponent implements OnInit, OnDestroy 
{
/*
    Variables
  */
    public pageTittle : string;
    public statusPage : StatusPage;
    public clientSelected? : Client;
  
    /*
      Constructor
    */
    constructor()
    {
      this.pageTittle = "Página de Clientes";
      this.statusPage = StatusPage.ReadAll;
      this.clientSelected = undefined;
    }
  
    /*
      Métodos eventuales
    */
    ngOnInit(): void
    {
    }
  
    ngOnDestroy(): void 
    {
    }
  
    /*
      Métodos propios
    */
    public changeStatusPage(newStatusPage : StatusPage) : void
    {
      this.statusPage = newStatusPage;
    }
  
    public selectClient(newClientSelected : Client)
    {
      this.clientSelected = newClientSelected;
    }
  
}
