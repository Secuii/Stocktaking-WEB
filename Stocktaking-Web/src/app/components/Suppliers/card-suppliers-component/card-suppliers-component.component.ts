import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from 'src/app/entities/supplier';
import { StatusPage } from 'src/app/enums/enum-status-page';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-card-suppliers-component',
  templateUrl: './card-suppliers-component.component.html',
  styleUrls: [
    './../../components.css'
],
  providers:
  [
      SupplierService
  ]
})
export class CardSuppliersComponentComponent implements OnInit{

    /*
        Eventos:
    */
        @Output() statusPageEvent = new EventEmitter <StatusPage>();


     /*
        Variales:
    */
        @Input() supplier? : Supplier = new Supplier();
        public idSupplier: number;
        //public supplierRetrieved: Supplier | undefined;
    /*
        Constructor
    */
    constructor
    (
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private supplierService: SupplierService)
    {
        //this.supplierRetrieved= new Supplier();
        //this.idSupplier = '0';
        //this.idSupplier = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
        //this.supplierService.getSupplierById(this.idSupplier).subscribe(res => this.supplierRetrieved = res)
        this.supplier= new Supplier();
        this.idSupplier = 0;
    }

    
    /*
        Métodos implementados de interfaces:
    */
   
    ngOnInit(): void 
    {
/*
        this.activatedRoute.params.subscribe
        (
            params => 
            {
                this.idSupplier = params['id'];
            }
        );

        this.getSupplierFromIdService();
*/
    }
    
    ngOnDestroy(): void 
    {

    }

    /*
        Métodos de Estados
    */
    public goBackBtn() 
    {
        this.changeStatusPage(StatusPage.ReadAll);
    }

    private changeStatusPage (newStatusPage : StatusPage)
    {
        this.statusPageEvent.emit(newStatusPage);
    }

 /*
      Métodos de enrutamiento
  */
/*
      public mainPageBtn() {
        this.router.navigateByUrl('/main');
      }
    
      public showProductsBtn() {
        // Ir a la página de detalle del id
       // this.router.navigate(['products', id]);
      }

      public showEditBtn() {
          // Ir a la página de detalle del id
         // this.router.navigate(['update', id]);
      }
*/
    /*
        Método getSupplierFromIdService:
            Entradas: Ninguna (El id lo pilla del this.supplier)
            Objetivo: petición al servicio de supplier a construir por id.
            Salidas: Booleana. (true: Si se ha conseguido | false: Si no se ha conseguido)
    */
/*
      private getSupplierFromIdService(): void
      {
          this.supplierService.readASupplier(this.idSupplier).subscribe(
              response => 
              {
                  this.supplier = response;
              }
          )
      }
*/

}
