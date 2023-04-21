import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/entities/supplier';

@Component({
  selector: 'app-list-suppliers-component',
  templateUrl: './list-suppliers-component.component.html',
  styleUrls: ['./../../components.css']
})
export class ListSuppliersComponentComponent {


   /*
        Variales:
    */
        public allDatas: Supplier[];
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

  public showProductsBtn() {
    // Ir a la página de detalle del id
   // this.router.navigate(['products', id]);
  }

  /*
      Métodos de orden de los datos
  */
  public orderById() : void
  {
     /* this.supplierService.readAllSuppliersById().subscribe(
          response => 
          {
              this.allDatas = response;
          }
      ) */
  }

  public orderByName() : void
  {
     /* this.supplierService.readAllSuppliersByName().subscribe(
          response => 
          {
              this.allDatas = response;
          }
      )*/
  }

  public orderByEmail() : void
  {
     /* this.supplierService.readAllSuppliersByEmail().subscribe(
          response => 
          {
              this.allDatas = response;
          }
      )*/
  }

  public orderByAddress() : void
  {
     /* this.supplierService.readAllSuppliersByAddress().subscribe(
          response => 
          {
              this.allDatas = response;
          }
      )*/
  }

  public orderByDescription() : void
  {
     /* this.supplierService.readAllSuppliersByDescription().subscribe(
          response => 
          {
              this.allDatas = response;
          }
      )*/
  }

}
