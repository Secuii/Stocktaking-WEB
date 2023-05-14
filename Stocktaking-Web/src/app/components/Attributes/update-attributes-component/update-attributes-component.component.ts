import { Router } from '@angular/router';
import { MyRoutingService } from './../../../services/my.routing.service';
import { StatusPage } from './../../../enums/enum-status-page';
import { AttributeService } from './../../../services/attributes.service';
import { AttributeForm } from './../../../entities-form/attribute-form';
import { Attribute } from './../../../entities/attribute';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component
  (
    {
      selector: 'app-update-attributes-component',
      templateUrl: './update-attributes-component.component.html',
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
export class UpdateAttributesComponentComponent implements OnInit, OnDestroy {
  /*
    Eventos
  */
  @Output() statusPageEvent = new EventEmitter<StatusPage>();

  /*
    Variables
  */
  @Input() attributes?: Attribute = new Attribute();
  public attributesForm: AttributeForm
  public workAttributes: Attribute;

  /*
    Constructor
    this.myRoutingService.reloadCurrentRoute(this.router);
  */
  constructor
    (
      private attributeservice: AttributeService,
      private myRoutingService: MyRoutingService,
      private router: Router
    ) {
    this.attributesForm = new AttributeForm();
    this.workAttributes = new Attribute();
  }

  /*
    Métodos implementados de interfaces
  */
  ngOnInit(): void {
    if (this.attributes != undefined) {
      if (this.attributes.id != -1) {
        //this.workAttributes = this.attributes;
        this.workAttributes.id = this.attributes.id;
        this.workAttributes.name = this.attributes.name;
        this.workAttributes.description = this.attributes.description;

        this.attributesForm.id = this.attributes.id;
      }
      else {
      }

    }
    this.resetForm();
  }

  ngOnDestroy(): void {

  }

  /*
    Métodos de Botones
  */
  public goBackBtn() {
    this.changeStatusPage(StatusPage.ReadAll);
  }

  public sendDatasBtn(formData: AttributeForm) {

  }

  /*
    Métodos de estados
  */
  private changeStatusPage(newStatusPage: StatusPage) {
    this.statusPageEvent.emit(newStatusPage);
  }

  /*
    Métodos de formulario
  */
  public submitSendDatas(attributesForm: AttributeForm) {
    // Si el ID de Attributes = 0 (Por defecto) -> Crear
    if (this.workAttributes.id == -1) {
      this.attributeservice.createAttribute(this.attributesForm).subscribe
        (
          response => {
            alert("Attributes created");
          }
        )
    }
    else // Si el ID de Attributes != 0 (Existe) -> Udate
    {
      this.mapperAttributes(); // Mapeamos el workAttributes(Attributes) al formulario(AttributesForm)
      this.attributeservice.updateAttribute(this.workAttributes).subscribe
        (
          response => {
            alert("Attributes modified");
          }
        )
    }
    this.changeStatusPage(StatusPage.ReadAll);
    this.myRoutingService.reloadCurrentRoute(this.router);
  }

  private mapperAttributes(): void {
    this.workAttributes.name = this.attributesForm.name;
    this.workAttributes.description = this.attributesForm.description;
  }

  public resetForm() {
    this.attributesForm.name = this.workAttributes.name;
    this.attributesForm.description = this.workAttributes.description;
  }
}
