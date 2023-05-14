import { Component, OnDestroy, OnInit } from '@angular/core';
import { Permission } from 'src/app/entities/permission';
import { StatusPage } from 'src/app/enums/enum-status-page';

@Component
  (
    {
      selector: 'app-permission-page',
      templateUrl: './permission-page.component.html',
      styleUrls:
        [
          '../pages.css'
        ]
    }
  )
export class PermissionPageComponent implements OnInit, OnDestroy {
  /*
    Variables
  */
  public pageTittle: string;
  public statusPage: StatusPage;
  public permissionSelected?: Permission;

  /*
    Constructor
  */
  constructor() {
    this.pageTittle = "Página de Permisos";
    this.statusPage = StatusPage.ReadAll;
    this.permissionSelected = undefined;
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

  public selectPermission(newPermissionSelected: Permission) {
    this.permissionSelected = newPermissionSelected;
  }
}
