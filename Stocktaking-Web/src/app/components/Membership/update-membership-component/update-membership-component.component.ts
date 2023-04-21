import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Membership } from 'src/app/entities/membership';

@Component({
  selector: 'app-update-membership-component',
  templateUrl: './update-membership-component.component.html',
  styleUrls: ['./../../components.css']
})
export class UpdateMembershipComponentComponent {

   /*
      Variables:
  */
      public membership: Membership;
      public idMembership: number;
      public membershipAux: Membership;
  
      //public listMembershipChecker: ListMembershipChecker;
      
      public messageCompare: string;
  
      public allValid: boolean;
      /*
          Costructor:
      */
      constructor
      (
          private activatedRoute: ActivatedRoute, 
          //private membershipService: MembershipService,
          //private loginCookiesController: LoginCookiesController,
          private router: Router,
          //private checkMembership: CheckMembershipService
      )
      {
        this.membership= new Membership();

        this.idMembership = 0;
  
        this.membershipAux = new Membership();
        
        //this.listMembershipChecker = new ListMembershipChecker;
        
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
                this.idMembership = params['id'];
            }
        );

        this.getMembershipFromIdService();
    }

    /*
        Método getMembershipFromIdService:
            Entradas: Ninguna: El id lo obtiene de this.membership.
            Objetivo: petición al servicio del membership a construir por id.
            Salidas: Ninguna
    */
    private getMembershipFromIdService(): void
    {
      /*
        this.membershipService.readAMembership(this.idMembership).subscribe(
            response => 
            {
                this.membership = response;
                this.membershipAux = new Membership();
                this.membershipAux.setAllId(this.membership.id, this.membership.name, this.membership.price);
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
        this.listMembershipChecker = this.checkMembership.checkAll(this.membership);
        if (this.listMembershipChecker.allCheck)
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
        Método compareMemberships:
            Entradas: Ninguna.
            Objetivo: Pregunta si la oferta del formulario ha cambiado con respecto a la inicial
            Salidas: Booleana. (true: Si se ha conseguido | false: Si no se ha conseguido)
    */
    private compareMemberships(): boolean
    {
        if
        (
            this.membership.name == this.membershipAux.name && 
            this.membership.price == this.membershipAux.price 
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
    public submitMembershipUpdate(form: Membership) : void
    { 
      /*
        this.membershipService.updateAMembership(this.membership, this.loginCookiesController.getToken()).subscribe
        (
            response => 
            {
                alert("Membership Updated.");
                this.router.navigate(['membershipsList']);
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
