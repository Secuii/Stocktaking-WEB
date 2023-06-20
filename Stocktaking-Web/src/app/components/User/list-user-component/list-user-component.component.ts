import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/entities/user';
import { StatusPage } from 'src/app/enums/enum-status-page';
import { Router } from '@angular/router';
import { DeleteResponse } from 'src/app/entities-response/delete-response';
import { MyRoutingService } from 'src/app/services/my.routing.service';
import { UserService } from 'src/app/services/user.service';
import { ApiResponse } from 'src/app/entities-response/apiResponse';





@Component({
  selector: 'app-list-user-component',
  templateUrl: './list-user-component.component.html',
  styleUrls: ['./../../components.css'],
  providers: [
    UserService,
    MyRoutingService
  ]
})
export class ListUserComponentComponent implements OnInit, OnDestroy {


  /*
       Eventos:
   */
  @Output() statusPageEvent = new EventEmitter<StatusPage>();
  @Output() selectUserEvent = new EventEmitter<User>();

  /*
      Variales:
  */
  public allDatas: ApiResponse<User[]> | undefined;
  public allEntities : Array<User> | undefined;


  /*
  Constructor
  */
  constructor
  (
    private usersService: UserService,
    private router: Router,
    private myRouringService: MyRoutingService
  ) 
  {
    this.allDatas = new ApiResponse<User[]>();
    this.allEntities = new Array<User>;
  }

  ngOnInit(): void {
    this.usersService.readAllUsers().subscribe
      (
        response => {
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

  public createUserBtn() {
    this.selectUser(new User());
    this.changeStatusPage(StatusPage.Create);
  }

  public showUserBtn(userOfList: User): void {
    this.selectUser(userOfList);
    this.changeStatusPage(StatusPage.ReadOne);
  }

  public updateUserBtn(userOfList: User): void 
  {
    this.selectUser(userOfList);
    this.changeStatusPage(StatusPage.Update);
  }

  public deleteUserBtn(userOfList: User): void 
  {
    let idOfList: number = userOfList.id;
    let responseDelete: ApiResponse<User>;
    this.selectUser(userOfList);

    this.usersService.deleteUser(idOfList).subscribe
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

  public selectUser(newuserSelected: User) {
    this.selectUserEvent.emit(newuserSelected);
  }

  /*
      Métodos de orden de los datos
  */
  public orderById(): void {
  }

  public orderByName(): void {
  }

  public orderByLastName(): void {
  }

  public orderByEmail(): void {
  }

  public orderByAge(): void {
  }

  public orderByPassword(): void {
  }

  public orderByMembership(): void {

  }

}

