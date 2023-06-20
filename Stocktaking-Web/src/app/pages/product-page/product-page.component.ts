import { Product } from './../../entities/product';
import { StatusPage } from './../../enums/enum-status-page';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component
(
  {
    selector: 'app-product-page',
    templateUrl: './product-page.component.html',
    styleUrls: ['../pages.css']
    
  }
)
export class ProductPageComponent implements OnInit, OnDestroy
{
  /*
    Variables
  */
  public pageTittle : string;
  public statusPage : StatusPage;
  public productSelected? : Product;

  /*
    Constructor
  */
  constructor()
  {
    this.pageTittle = "Página de Tipos de Productos";
    this.statusPage = StatusPage.ReadAll;
    this.productSelected = undefined;
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

  public selectProduct(newProductSelected : Product)
  {
    this.productSelected = newProductSelected;
  }
}

