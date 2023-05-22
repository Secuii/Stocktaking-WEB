import { Router } from '@angular/router';
import { MyRoutingService } from './../../../services/my.routing.service';
import { StatusPage } from './../../../enums/enum-status-page';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from './../../../services/user.service';
import { User } from 'src/app/entities/user';
import { UserForm } from './../../../entities-form/user-form';
import { Membership } from 'src/app/entities/membership';
import { MembershipService } from 'src/app/services/membership.service';




@Component({
  selector: 'app-update-user-component',
  templateUrl: './update-user-component.component.html',
  styleUrls: ['./../../components.css'],
  providers:
    [
      MembershipService,
      UserService,
      MyRoutingService
    ]
})
export class UpdateUserComponentComponent implements OnInit, OnDestroy 
{

  /*
    Eventos
  */
  @Output() statusPageEvent = new EventEmitter<StatusPage>();

  /*
    Variables
  */
  @Input() user?: User = new User();
  public userForm: UserForm
  public workUser: User;

  public listMemberships : Membership[] | undefined;
  public selectedMembership : Membership  | undefined;


  /*
    Constructor
    this.myRoutingService.reloadCurrentRoute(this.router);
  */
  constructor
  (
    private userService: UserService,
    private membershipService : MembershipService,
    private myRoutingService: MyRoutingService,
    private router: Router
  ) 
  {
    this.userForm = new UserForm();
    this.workUser = new User();
    this.listMemberships = new Array<Membership>();
    this.selectedMembership = new Membership();
  }

  /*
    Métodos implementados de interfaces
  */
  ngOnInit(): void 
  {
    this.membershipService.readAllMemberships().subscribe
    (
        response =>
        {
          this.listMemberships = response.response;
          // Verificar si listMemberships no es undefined y tiene al menos un elemento
          if (this.listMemberships && this.listMemberships.length > 0) 
          {
            this.selectedMembership = this.listMemberships[0]; // Asignar el primer elemento
          }
        }
    )

    if (this.user != undefined) 
    {
      if (this.user.id != -1) {
        //this.workUser = this.user;
        this.workUser.id = this.user.id;
        this.workUser.name = this.user.name;
        this.workUser.lastName = this.user.lastName;
        this.workUser.email = this.user.email;
        this.workUser.age = this.user.age;
        this.workUser.password = this.user.password;
        this.workUser.membership = this.user.membership;
        this.selectedMembership = this.workUser.membership;
        this.userForm.id = this.user.id;
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
  public goBackBtn() 
  {
    this.changeStatusPage(StatusPage.ReadAll);
  }

  public sendDatasBtn(formData: UserForm) 
  {

  }

  /*
    Métodos de estados
  */
  private changeStatusPage(newStatusPage: StatusPage) 
  {
    this.statusPageEvent.emit(newStatusPage);
  }

  /*
    Métodos de formulario
  */
  public submitSendDatas(userForm: UserForm) 
  {
    // Si el ID de User = 0 (Por defecto) -> Crear
    if (this.workUser.id == -1) 
    {
      if (this.selectedMembership !== undefined) 
      {
        this.userForm.membership = this.selectedMembership; // Asignar el objeto Membership seleccionado
      }
      console.log(this.userForm);
      this.userService.createUser(this.userForm).subscribe
        (
          response => 
          {
            alert("User created");
          }
        )
    }
    else // Si el ID de User != 0 (Existe) -> Udate
    {
      if (this.selectedMembership !== undefined) 
      {
        this.workUser.membership = this.selectedMembership; // Asignar el objeto Membership seleccionado
      }
      console.log(this.workUser);
      this.mapperUser(); // Mapeamos el workUser(User) al formulario(UserForm)
      console.log(this.workUser);
      this.userService.updateUser(this.workUser).subscribe
        (
          response => 
          {
            alert("User modified");
          }
        )
    }
    this.changeStatusPage(StatusPage.ReadAll);
    this.myRoutingService.reloadCurrentRoute(this.router);
  }

  private mapperUser(): void 
  {
    this.workUser.name = this.userForm.name;
    this.workUser.lastName = this.userForm.lastName;
    this.workUser.email = this.userForm.email;
    this.workUser.age = this.userForm.age;
    this.workUser.password = this.userForm.password;
    
    
    this.workUser.membership = this.userForm.membership;
  }

  public resetForm() 
  {
    this.userForm.name = this.workUser.name;
    this.userForm.lastName = this.workUser.lastName;
    this.userForm.email = this.workUser.email;
    this.userForm.age = this.workUser.age;
    this.userForm.password = this.workUser.password;
    this.selectedMembership = this.workUser.membership;
    if (this.selectedMembership != undefined)
    {
      this.userForm.membership = this.selectedMembership; // Asignar el objeto Membership seleccionado
    }
  }

  public changeMembershipSelection()
  {
    this.selectedMembership = this.userForm.membership;
  }
}
