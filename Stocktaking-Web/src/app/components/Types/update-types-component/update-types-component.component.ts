import { Router } from '@angular/router';
import { MyRoutingService } from './../../../services/my.routing.service';
import { StatusPage } from './../../../enums/enum-status-page';
import { TypeService } from './../../../services/types.service';
import { TypeForm } from './../../../entities-form/type-form';
import { Type } from './../../../entities/type';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component
(
  {
    selector: 'app-update-types-component',
    templateUrl: './update-types-component.component.html',
    styleUrls: 
    [
      './../../components.css'
    ],
    providers:
    [
        TypeService,
        MyRoutingService
    ]
  }
)
export class UpdateTypesComponentComponent implements OnInit, OnDestroy
{
  /*
    Eventos
  */
  @Output() statusPageEvent = new EventEmitter <StatusPage>();

  /*
    Variables
  */
  @Input() type? : Type = new Type();
  public typeForm : TypeForm
  public workType : Type;

  /*
    Constructor
    this.myRoutingService.reloadCurrentRoute(this.router);
  */
  constructor
  (
    private typeService : TypeService,
    private myRoutingService : MyRoutingService,
    private router : Router
  )
  {
    this.typeForm = new TypeForm();
    this.workType = new Type();
  }
  
  /*
    Métodos implementados de interfaces
  */
  ngOnInit(): void 
  {
    if(this.type != undefined)
    {
      if(this.type.id != -1)
      {
        //this.workType = this.type;
        this.workType.id = this.type.id;
        this.workType.name = this.type.name;
        this.workType.description = this.type.description;

        this.typeForm.id = this.type.id;
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

  public sendDatasBtn(formData : TypeForm)
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
  public submitSendDatas (typeForm : TypeForm)
  {
    // Si el ID de Type = 0 (Por defecto) -> Crear
    if (this.workType.id == -1)
    {
      this.typeService.createType(this.typeForm).subscribe
      (
        response => 
        {
          alert("Type created");
        }
      )
    }
    else // Si el ID de Type != 0 (Existe) -> Udate
    {
      this.mapperType(); // Mapeamos el workType(Type) al formulario(TypeForm)
      this.typeService.updateType(this.workType).subscribe
      (
        response => 
        {
          alert("Type modified");
        }
      )
    }
    this.changeStatusPage(StatusPage.ReadAll);
    this.myRoutingService.reloadCurrentRoute(this.router);
  }

  private mapperType () : void
  {
    this.workType.name = this.typeForm.name;
    this.workType.description = this.typeForm.description;
  }

  public resetForm()
  {
    this.typeForm.name = this.workType.name;
    this.typeForm.description = this.workType.description;
  }
}
