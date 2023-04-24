
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Type } from 'src/app/entities/type';

import { TypeService } from 'src/app/services/types.service';


@Component({
  selector: 'app-list-types-component',
  templateUrl: './list-types-component.component.html',
  styleUrls: 
  [
    './../../components.css'
  ],
  providers:
        [
            TypeService
        ]
})
export class ListTypesComponentComponent implements OnInit, OnDestroy{


  /*
        Variales:
    */
        public allDatas: Type[];
    /*
        Constructor
    */
    constructor
    (
        private typesService : TypeService,
        private router: Router
    )
    {
        this.allDatas=[];
    }

    ngOnInit(): void 
    {
        this.typesService.findTypes().subscribe(
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
     /* this.typesService.readAllTypesById().subscribe(
          response => 
          {
              this.allDatas = response;
          }
      ) */
  }

  public orderByName() : void
  {
     /* this.typesService.readAllTypesByName().subscribe(
          response => 
          {
              this.allDatas = response;
          }
      )*/
  }

  public orderByPrice() : void
  {
     /* this.typesService.readAllTypesByEmail().subscribe(
          response => 
          {
              this.allDatas = response;
          }
      )*/
  }





}
