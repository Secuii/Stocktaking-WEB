import { Component, OnDestroy, OnInit } from '@angular/core';
import { Type } from 'src/app/entities/type';
import { StatusPage } from 'src/app/enums/enum-status-page';

@Component
(
  {
    selector: 'app-type-page',
    templateUrl: './type-page.component.html',
    styleUrls: 
    [
      '../pages.css'
    ]
  }
)
export class TypePageComponent implements OnInit, OnDestroy 
{
  /*
    Variables
  */
  public pageTittle : string;
  public statusPage : StatusPage;
  public typeSelected? : Type;

  /*
    Constructor
  */
  constructor()
  {
    this.pageTittle = "Página de Tipos de Productos";
    this.statusPage = StatusPage.ReadAll;
    this.typeSelected = undefined;
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

  public selectType(newTypeSelected : Type)
  {
    this.typeSelected = newTypeSelected;
  }
}
