
import { StatusPage } from './../../../enums/enum-status-page';

import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Attribute } from 'src/app/entities/attribute';
import { MyRoutingService } from 'src/app/services/my.routing.service';

import { AttributeService } from 'src/app/services/attributes.service';
import { ApiResponse } from 'src/app/entities-response/apiResponse';


@Component
  (
    {
      selector: 'app-list-attributes-component',
      templateUrl: './list-attributes-component.component.html',
      styleUrls:
        [
          './../../components.css'
        ],
      providers:
        [
          AttributeService,
          MyRoutingService
        ]
    }
  )
export class ListAttributesComponentComponent implements OnInit, OnDestroy {
  /*
      Eventos:
  */
  @Output() statusPageEvent = new EventEmitter<StatusPage>();
  @Output() selectAttributesEvent = new EventEmitter<Attribute>();

  /*
      Variales:
  */
  public allDatas: ApiResponse<Attribute[]> | undefined;
  public allEntities : Attribute[] | undefined;

  /*
  Constructor
  */
  constructor
    (
      private attributeservice: AttributeService,
      private router: Router,
      private myRouringService: MyRoutingService
    ) 
  {
    this.allDatas = new ApiResponse<Attribute[]> () ;
    this.allEntities = new Array<Attribute>();
  }

  ngOnInit(): void 
  {
    this.attributeservice.readAllAttributes().subscribe
      (
        response => 
        {
          this.allDatas = response;
          this.allEntities = this.allDatas.response;
        }
      )
  }

  ngOnDestroy(): void {
  }


  /*
      Métodos de Estados
  */

  public createAttributesBtn() 
  {
    this.selectAttributes(new Attribute());
    this.changeStatusPage(StatusPage.Create);
  }

  public showAttributesBtn(attributesOfList: Attribute): void 
  {
    this.selectAttributes(attributesOfList);
    this.changeStatusPage(StatusPage.ReadOne);
  }

  public updateAttributesBtn(attributesOfList: Attribute): void 
  {
    this.selectAttributes(attributesOfList);
    this.changeStatusPage(StatusPage.Update);
  }

  public deleteAttributesBtn(attributesOfList: Attribute): void 
  {
    let idOfList: number = attributesOfList.id;
    let responseDelete: ApiResponse<Attribute>;
    this.selectAttributes(attributesOfList);

    this.attributeservice.deleteAttribute(idOfList).subscribe
      (
        response => 
        {
          responseDelete = response;
          alert(responseDelete.messageResult);
        }
      )
    this.myRouringService.reloadCurrentRoute(this.router);
  }

  public changeStatusPage(newStatusPage: StatusPage) {
    this.statusPageEvent.emit(newStatusPage);
  }

  public selectAttributes(newattributeselected: Attribute) {
    this.selectAttributesEvent.emit(newattributeselected);
  }

  /*
      Métodos de orden de los datos
  */
  public orderById(): void {
  }

  public orderByName(): void {
  }

  public orderByPrice(): void {

  }

  public orderByType() : void
  {

  }

}