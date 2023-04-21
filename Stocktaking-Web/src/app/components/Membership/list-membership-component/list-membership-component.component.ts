import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Membership } from 'src/app/entities/membership';

@Component({
  selector: 'app-list-membership-component',
  templateUrl: './list-membership-component.component.html',
  styleUrls: ['./../../components.css']
})
export class ListMembershipComponentComponent {

   /*
        Variales:
    */
        public allDatas: Membership[];
    /*
        Constructor
    */
    constructor(private router: Router)
    {
        this.allDatas=[];
    }
    

  /*
      Métodos de enrutamiento
  */

  public mainPageBtn() {
    this.router.navigateByUrl('/main');
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
