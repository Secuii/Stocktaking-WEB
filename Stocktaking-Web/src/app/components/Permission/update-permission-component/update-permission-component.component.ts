import { Router } from '@angular/router';
import { MyRoutingService } from './../../../services/my.routing.service';
import { StatusPage } from './../../../enums/enum-status-page';
import { PermissionService } from './../../../services/permissions.service';
import { PermissionForm } from './../../../entities-form/permission-form';
import { Permission } from './../../../entities/permission';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component
  (
    {
      selector: 'app-update-permission-component',
      templateUrl: './update-permission-component.component.html',
      styleUrls:
        [
          './../../components.css'
        ],
      providers:
        [
          PermissionService,
          MyRoutingService
        ]
    }
  )
export class UpdatePermissionComponentComponent implements OnInit, OnDestroy {
  /*
    Eventos
  */
  @Output() statusPageEvent = new EventEmitter<StatusPage>();

  /*
    Variables
  */
  @Input() permission?: Permission = new Permission();
  public permissionForm: PermissionForm
  public workPermission: Permission;

  /*
    Constructor
    this.myRoutingService.reloadCurrentRoute(this.router);
  */
  constructor
    (
      private permissionService: PermissionService,
      private myRoutingService: MyRoutingService,
      private router: Router
    ) {
    this.permissionForm = new PermissionForm();
    this.workPermission = new Permission();
  }

  /*
    Métodos implementados de interfaces
  */
  ngOnInit(): void {
    if (this.permission != undefined) {
      if (this.permission.id != -1) {
        //this.workPermission = this.permission;
        this.workPermission.id = this.permission.id;
        this.workPermission.name = this.permission.name;
        this.workPermission.description = this.permission.description;

        this.permissionForm.id = this.permission.id;
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

  public sendDatasBtn(formData: PermissionForm) {

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
  public submitSendDatas(permissionForm: PermissionForm) {
    // Si el ID de Permission = 0 (Por defecto) -> Crear
    if (this.workPermission.id == -1) {
      this.permissionService.createPermission(this.permissionForm).subscribe
        (
          response => {
            alert("Permission created");
          }
        )
    }
    else // Si el ID de Permission != 0 (Existe) -> Udate
    {
      this.mapperPermission(); // Mapeamos el workPermission(Permission) al formulario(PermissionForm)
      this.permissionService.updatePermission(this.workPermission).subscribe
        (
          response => {
            alert("Permission modified");
          }
        )
    }
    this.changeStatusPage(StatusPage.ReadAll);
    this.myRoutingService.reloadCurrentRoute(this.router);
  }

  private mapperPermission(): void {
    this.workPermission.name = this.permissionForm.name;
    this.workPermission.description = this.permissionForm.description;
  }

  public resetForm() {
    this.permissionForm.name = this.workPermission.name;
    this.permissionForm.description = this.workPermission.description;
  }
}
