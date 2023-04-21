import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from 'src/app/entities/supplier';

@Component({
  selector: 'app-update-suppliers-component',
  templateUrl: './update-suppliers-component.component.html',
  styleUrls: ['./../../components.css']
})
export class UpdateSuppliersComponentComponent  implements OnInit{

   /*
      Variables:
  */
      public supplier: Supplier;
      public idSupplier: number;
      public supplierAux: Supplier;
  
      //public listSupplierChecker: ListSupplierChecker;
      
      public messageCompare: string;
  
      public allValid: boolean;
      /*
          Costructor:
      */
      constructor
      (
          private activatedRoute: ActivatedRoute, 
          //private supplierService: SupplierService,
          //private loginCookiesController: LoginCookiesController,
          private router: Router,
          //private checkSuppliers: CheckSupplierService
      )
      {
        this.supplier= new Supplier();

        this.idSupplier = 0;
  
        this.supplierAux = new Supplier();
        
        //this.listSupplierChecker = new ListSupplierChecker;
        
        this.messageCompare = "";

        this.allValid = false;
      }

          /*
      Métodos implementados de interfaces:
    */
    ngOnInit(): void 
    {
        this.activatedRoute.params.subscribe
        (
            params => 
            {
                this.idSupplier = params['id'];
            }
        );

        this.getSupplierFromIdService();
    }

    /*
        Método getSupplierFromIdService:
            Entradas: Ninguna: El id lo obtiene de this.supplier.
            Objetivo: petición al servicio del supplier a construir por id.
            Salidas: Ninguna
    */
    private getSupplierFromIdService(): void
    {
      /*
        this.supplierService.readASupplier(this.idSupplier).subscribe(
            response => 
            {
                this.supplier = response;
                this.supplierAux = new Supplier();
                this.supplierAux.setAllId(this.supplier.id, this.supplier.name, this.supplier.email, this.supplier.address, this.supplier.description);
            }
        )
        */
    }


/*
    Método checkAll:
        Entradas: Ninguna.
        Objetivo: Realizar los checkeos de todos los campos del formulario
        Salidas: Ninguna
*/
    public checkAll(): void
    {
      /*
        this.listSupplierChecker = this.checkSuppliers.checkAll(this.supplier);
        if (this.listSupplierChecker.allCheck)
        {
            if(!this.compareOffers())
            {
                this.allValid = true;
                this.messageCompare = ""
            }
            else
            {
                this.allValid = false;
                this.messageCompare = "No hay cambios."
            }
        }
        else
        {
            this.allValid = false;
            this.messageCompare = ""
        }
        */
    }

        /*
        Método compareSuppliers:
            Entradas: Ninguna.
            Objetivo: Pregunta si la oferta del formulario ha cambiado con respecto a la inicial
            Salidas: Booleana. (true: Si se ha conseguido | false: Si no se ha conseguido)
    */
    private compareSuppliers(): boolean
    {
        if
        (
            this.supplier.name == this.supplierAux.name && 
            this.supplier.email == this.supplierAux.email && 
            this.supplier.address == this.supplierAux.address && 
            this.supplier.description == this.supplierAux.description
        )
        {
            return true; // Son iguales
        }
        else
        {
            return false; // No son iguales
        }
    }

    /*
        Método submitOfferUpdate
            Entradas: oferta a modificar 
            Objetivo: Enviar al servicio la oferta a actualizar y dar feedback del proceso
            Salidas: Ninguna
    */
    public submitSupplierUpdate(form: Supplier) : void
    { 
      /*
        this.supplierService.updateASupplier(this.supplier, this.loginCookiesController.getToken()).subscribe
        (
            response => 
            {
                alert("Supplier Updated.");
                this.router.navigate(['suppliersList']);
            },
            error  =>
            { 
                alert("Error");
            }
        )
        */
    }

  /*
      Métodos de enrutamiento
  */

    public mainPageBtn() {
      this.router.navigateByUrl('/main');
    }


}


