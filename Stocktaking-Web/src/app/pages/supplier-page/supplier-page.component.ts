import { Component, OnDestroy, OnInit } from '@angular/core';
import { Supplier } from 'src/app/entities/supplier';
import { StatusPage } from 'src/app/enums/enum-status-page';

@Component
(
  {
    selector: 'app-supplier-page',
    templateUrl: './supplier-page.component.html',
    styleUrls: 
    [
      '../pages.css'
    ]
  }
)
export class SupplierPageComponent implements OnInit, OnDestroy 
{

/*
    Variables
  */
    public pageTittle : string;
    public statusPage : StatusPage;
    public supplierSelected? : Supplier;
  
    /*
      Constructor
    */
    constructor()
    {
      this.pageTittle = "Página de Tipos de Productos";
      this.statusPage = StatusPage.ReadAll;
      this.supplierSelected = undefined;
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
  
    public selectSupplier(newSupplierSelected : Supplier)
    {
      this.supplierSelected = newSupplierSelected;
    }


}
