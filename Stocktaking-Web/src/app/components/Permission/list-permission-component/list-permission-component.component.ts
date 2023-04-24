import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-list-permission-component',
  templateUrl: './list-permission-component.component.html',
  styleUrls: ['./../../components.css']
})
export class ListPermissionComponentComponent implements OnInit, OnDestroy
{

   /*
        Variales:
    */
        public allDatas: Permissions[];
    /*
        Constructor
    */
    constructor
    (
        
        private router: Router
    )
    {
        this.allDatas=[];
    }

    ngOnInit(): void 
    {
       /*
      this.permisionsService.findPermissions().subscribe
        (
            response =>
            {
                this.allDatas = response;
            }
        )
      */
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
     /* this.permissionsService.readAllPermissionsById().subscribe(
          response => 
          {
              this.allDatas = response;
          }
      ) */
  }

  public orderByName() : void
  {
     /* this.permissionsService.readAllPermissionsByName().subscribe(
          response => 
          {
              this.allDatas = response;
          }
      )*/
  }

  public orderByDescription() : void
  {
     /* this.permissionsService.readAllPermissionsByEmail().subscribe(
          response => 
          {
              this.allDatas = response;
          }
      )*/
  }


}
