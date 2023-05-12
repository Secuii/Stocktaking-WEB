import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteResponse } from 'src/app/entities-response/delete-response';
import { Supplier } from 'src/app/entities/supplier';
import { StatusPage } from 'src/app/enums/enum-status-page';
import { MyRoutingService } from 'src/app/services/my.routing.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component(
    {

        selector: 'app-list-suppliers-component',
        templateUrl: './list-suppliers-component.component.html',
        styleUrls:  
        [
            './../../components.css'
        ],
        providers:
        [
            SupplierService,
            MyRoutingService
        ]
    }
)
export class ListSuppliersComponentComponent implements OnInit, OnDestroy {

    /*
        Eventos:
    */
        @Output() statusPageEvent = new EventEmitter <StatusPage>();
        @Output() selectSupplierEvent = new EventEmitter <Supplier>();

   /*
        Variales:
    */
        public allDatas: Supplier[];
        //t_deleteFailed: string  = '';
    /*
        Constructor
    */
    constructor
    (

        private supplierService: SupplierService,
        private router: Router,
        private myRouringService : MyRoutingService
    )
    {
        this.allDatas = new Array<Supplier>;
        //this.allDatas=[];
        //this.supplierService.findSuppliers().subscribe(res => this.allDatas = res);
    }
    
    ngOnInit(): void 
    {
        this.supplierService.readAllSuppliers().subscribe
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



    public createSupplierBtn() 
    {
        this.selectSupplier(new Supplier());
        this.changeStatusPage(StatusPage.Create);
    }

    public showSupplierBtn(supplierOfList: Supplier): void
    {
        this.selectSupplier(supplierOfList);
        this.changeStatusPage(StatusPage.ReadOne);
    }

    public updateSupplierBtn(supplierOfList: Supplier): void
    {
        this.selectSupplier(supplierOfList);
        this.changeStatusPage(StatusPage.Update);
    }

    public deleteSupplierBtn(supplierOfList: Supplier): void
    {
        let idOfList : number = supplierOfList.id;
        let responseDelete : DeleteResponse;
        this.selectSupplier(supplierOfList);

        this.supplierService.deleteSupplier(idOfList).subscribe
        (
            response => 
            {
                responseDelete = response;
                alert (responseDelete.response);
            }
        )
        this.myRouringService.reloadCurrentRoute(this.router);
    }

    public changeStatusPage (newStatusPage : StatusPage)
    {
        this.statusPageEvent.emit(newStatusPage);
    }

    public selectSupplier (newsupplierSelected : Supplier)
    {
        this.selectSupplierEvent.emit(newsupplierSelected);
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


/*--------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------*/


  /*
      Métodos de enrutamiento
  */
/*
  public mainPageBtn() {
    this.router.navigateByUrl('/main');
  }
*
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
*/

  /*
      Métodos de orden de los datos
  */


  //MÉTODO QUE ELIMINA EL SUPPLIER SELECCIONADO
/*
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
*/

}
