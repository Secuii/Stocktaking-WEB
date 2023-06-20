import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/entities/user';
import { StatusPage } from 'src/app/enums/enum-status-page';

@Component
  (
    {
      selector: 'app-user-page',
      templateUrl: './user-page.component.html',
      styleUrls:
        [
          '../pages.css'
        ]
    }
  )
export class UserPageComponent implements OnInit, OnDestroy {
  /*
    Variables
  */
  public pageTittle: string;
  public statusPage: StatusPage;
  public userSelected?: User;

  /*
    Constructor
  */
  constructor() {
    this.pageTittle = "Página de Usuarios";
    this.statusPage = StatusPage.ReadAll;
    this.userSelected = undefined;
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

  public selectUser(newUserSelected: User) {
    this.userSelected = newUserSelected;
  }
}
