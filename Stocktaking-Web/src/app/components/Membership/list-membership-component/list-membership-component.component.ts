import { Component, OnInit, OnDestroy, Output, EventEmitter, Attribute } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/entities-response/apiResponse';
import { DeleteResponse } from 'src/app/entities-response/delete-response';
import { Membership } from 'src/app/entities/membership';
import { StatusPage } from 'src/app/enums/enum-status-page';
import { MembershipService } from 'src/app/services/membership.service';
import { MyRoutingService } from 'src/app/services/my.routing.service';

@Component
(
    {
        selector: 'app-list-membership-component',
        templateUrl: './list-membership-component.component.html',
        styleUrls: 
        [
            './../../components.css'
        ],
        providers:
        [
            MembershipService,
            MyRoutingService
        ]
    }
)
export class ListMembershipComponentComponent implements OnInit, OnDestroy
{

    /*
        Eventos:
    */
        @Output() statusPageEvent = new EventEmitter <StatusPage>();
        @Output() selectMembershipEvent = new EventEmitter <Membership>();

   /*
        Variales:
    */
        public allDatas: ApiResponse<Membership[]> | undefined;
        public allEntities : Array<Membership>  | undefined;
        //public allDatas: Membership[];
    /*
        Constructor
    */
    constructor
    (
        private membershipService : MembershipService,
        private router: Router,
        private myRouringService : MyRoutingService
    )
    {
        this.allDatas = new ApiResponse<Membership[]> ();
        this.allEntities = new Array<Membership>;
    }

    ngOnInit(): void
    {
        this.membershipService.readAllMemberships().subscribe
        (
            response =>
            {
                this.allDatas = response;
                this.allEntities = this.allDatas.response;
            }
        )
    }
    ngOnDestroy(): void 
    {
    }
    

  /*
      Métodos de enrutamiento
  */

      public createMembershipBtn() 
      {
          this.selectMembership(new Membership());
          this.changeStatusPage(StatusPage.Create);
      }

      public showMembershipBtn(membershipOfList: Membership): void
      {
          this.selectMembership(membershipOfList);
          this.changeStatusPage(StatusPage.ReadOne);
      }

      public updateMembershipBtn(membershipOfList: Membership): void
      {
          this.selectMembership(membershipOfList);
          this.changeStatusPage(StatusPage.Update);
      }

      public deleteMembershipBtn(membershipOfList: Membership): void
      {
          let idOfList : number = membershipOfList.id;
          let responseDelete : ApiResponse<Membership>;
          this.selectMembership(membershipOfList);
  
          this.membershipService.deleteMembership(idOfList).subscribe
          (
              response => 
              {
                  responseDelete = response;
                  alert (responseDelete.messageResult);
              }
          )
          this.myRouringService.reloadCurrentRoute(this.router);
      }

      public changeStatusPage (newStatusPage : StatusPage)
      {
          this.statusPageEvent.emit(newStatusPage);
      }
      
      public selectMembership (newMembershipSelected : Membership)
      {
          this.selectMembershipEvent.emit(newMembershipSelected);
      }

      /*
  public mainPageBtn() 
  {
    this.router.navigateByUrl('/home');
  }
  */

  public showMoreBtn(id: number): void
  {
      // Ir a la página de detalle del id
     // this.router.navigate(['card', id]);
  }

  public showEditBtn() {
      // Ir a la página de detalle del id
     // this.router.navigate(['update', id]);
  }

  public showUsersBtn() {
    // Ir a la página de detalle del id
   // this.router.navigate(['products', id]);
  }

  /*
      Métodos de orden de los datos
  */
  public orderById() : void
  {
     /* this.membershipsService.readAllMembershipsById().subscribe(
          response => 
          {
              this.allDatas = response;
          }
      ) */
  }

  public orderByName() : void
  {
     /* this.membershipsService.readAllMembershipsByName().subscribe(
          response => 
          {
              this.allDatas = response;
          }
      )*/
  }

  public orderByDescription() : void
  {

  }

  public orderByPrice() : void
  {
     /* this.membershipsService.readAllMembershipsByEmail().subscribe(
          response => 
          {
              this.allDatas = response;
          }
      )*/
  }


}
