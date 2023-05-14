import { Component, OnDestroy, OnInit } from '@angular/core';

import { Attribute } from 'src/app/entities/attribute';
import { StatusPage } from 'src/app/enums/enum-status-page';

@Component
  (
    {
      selector: 'app-attribute-page',
      templateUrl: './attribute-page.component.html',
      styleUrls:
        [
          '../pages.css'
        ]
    }
  )
export class AttributePageComponent implements OnInit, OnDestroy {
  /*
    Variables
  */
  public pageTittle: string;
  public statusPage: StatusPage;
  public attributeSelected?: Attribute;

  /*
    Constructor
  */
  constructor() {
    this.pageTittle = "Página de Atributos";
    this.statusPage = StatusPage.ReadAll;
    this.attributeSelected = undefined;
  }

  /*
    Métodos eventuales
  */
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  /*
    Métodos propios
  */
  public changeStatusPage(newStatusPage: StatusPage): void {
    this.statusPage = newStatusPage;
  }

  public selectAttribute(newAttributeSelected: Attribute) {
    this.attributeSelected = newAttributeSelected;
  }
}
