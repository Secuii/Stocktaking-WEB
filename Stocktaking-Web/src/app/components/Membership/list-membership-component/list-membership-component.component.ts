import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Membership } from 'src/app/entities/membership';
import { MembershipService } from 'src/app/services/membership.service';

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
            MembershipService
        ]
    }
)
export class ListMembershipComponentComponent implements OnInit, OnDestroy
{

   /*
        Variales:
    */
        public allDatas: Membership[];
    /*
        Constructor
    */
    constructor
    (
        private membershipService : MembershipService,
        private router: Router
    )
    {
        this.allDatas=[];
    }

    ngOnInit(): void 
    {
        this.membershipService.findMemberships().subscribe
        (
            response =>
            {
                this.allDatas = response;
            }
        )
    }
    ngOnDestroy(): void 
    {
    }
    

  /*
      Métodos de enrutamiento
  */

  public mainPageBtn() {
    this.router.navigateByUrl('/home');
  }

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
