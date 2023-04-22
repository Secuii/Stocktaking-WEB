import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/entities/supplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-list-suppliers-component',
  templateUrl: './list-suppliers-component.component.html',
  styleUrls: ['./../../components.css']
})
export class ListSuppliersComponentComponent {


   /*
        Variales:
    */
        public allDatas: Supplier[] =[];
        t_deleteFailed: string  = '';
    /*
        Constructor
    */
    constructor(private router: Router,
        private supplierService: SupplierService)
    {
        //this.allDatas=[];
        this.supplierService.findSuppliers().subscribe(res => this.allDatas = res);
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

  //MÉTODO QUE ELIMINA EL SUPPLIER SELECCIONADO

  public deleteBtn(id: number) 
  {
    this.t_deleteFailed = "";
    this.supplierService.deleteSupplier(id).subscribe({
      next: supplierDeleted => {
        this.t_deleteFailed = "Se ha eliminado el proveedor.";
        this.allDatas = this.allDatas.filter(supplier => supplier.id != supplierDeleted.id);
      },
      error: err => {
        console.log(err)
        this.t_deleteFailed = 'DELETE FAILED: ' + err.error.detail;
        ;
      }
    });
  }


}
