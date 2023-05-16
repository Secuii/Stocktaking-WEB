import { Product } from './../../../entities/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MembershipForm } from 'src/app/entities-form/membership-form';
import { Membership } from 'src/app/entities/membership';
import { StatusPage } from 'src/app/enums/enum-status-page';
import { MembershipService } from 'src/app/services/membership.service';
import { MyRoutingService } from 'src/app/services/my.routing.service';

@Component
(
    {
        selector: 'app-update-membership-component',
        templateUrl: './update-membership-component.component.html',
        styleUrls: 
        [
            './../../components.css'
        ],
        providers:
          [
            MembershipService,
            MyRoutingService
          ]
    }
)
export class UpdateMembershipComponentComponent implements OnInit 
{

  /*
    Eventos
  */
  @Output() statusPageEvent = new EventEmitter <StatusPage>();


   /*
      Variables:
  */
    @Input() membership? : Membership = new Membership();
    //public membership: Membership;
    public membershipForm : MembershipForm;
    public workMembership : Membership;
    //public idMembership: number;
    //public membershipAux: Membership;
  
      //public listMembershipChecker: ListMembershipChecker;
      
      //public messageCompare: string;
  
      //public allValid: boolean;
      /*
          Constructor:
      */
      constructor
      (
          private activatedRoute: ActivatedRoute, 
          private membershipService: MembershipService,
          private myRoutingService : MyRoutingService,
          //private loginCookiesController: LoginCookiesController,
          private router: Router,
          //private checkMembership: CheckMembershipService
      )
      {
            this.membershipForm = new MembershipForm();
            this.workMembership = new Membership();
        

        //this.membership= new Membership();

        //this.idMembership = 0;
  
        //this.membershipAux = new Membership();
        
        //this.listMembershipChecker = new ListMembershipChecker;
        
        //this.messageCompare = "";

        //this.allValid = false;
      }

    /*
      Métodos implementados de interfaces:
    */
    ngOnInit(): void 
    {
        if(this.membership != undefined)
        {
          if(this.membership.id != -1)
          {
            //this.workType = this.type;
            this.workMembership.id = this.membership.id;
            this.workMembership.name = this.membership.name;
            this.workMembership.price = this.membership.price;
    
            this.membershipForm.id = this.membership.id;
          }
          else
          {
          }
          
        }
        this.resetForm();
      }


  /*
    Métodos de Botones
  */
    public goBackBtn()
    {
      this.changeStatusPage(StatusPage.ReadAll);
    }
  
    public sendDatasBtn(formData : MembershipForm)
    {
  
    }


  /*
    Métodos de estados
  */
    private changeStatusPage (newStatusPage : StatusPage)
    {
      this.statusPageEvent.emit(newStatusPage);
    }


  /*
    Métodos de formulario
  */
    public submitSendDatas (membershipForm : MembershipForm)
    {
      // Si el ID de Membership = 0 (Por defecto) -> Crear
      if (this.workMembership.id == -1)
      {
        this.membershipService.createMembership(this.membershipForm).subscribe
        (
          response => 
          {
            alert("Type created");
          }
        )
      }
      else // Si el ID de Type != 0 (Existe) -> Udate
      {
        this.mapperMembership(); // Mapeamos el workMembership(Membership) al formulario(membershipForm)
        this.membershipService.updateMembership(this.workMembership).subscribe
        (
          response => 
          {
            alert("Membership modified");
          }
        )
      }
      this.changeStatusPage(StatusPage.ReadAll);
      this.myRoutingService.reloadCurrentRoute(this.router);
    }

    private mapperMembership () : void
    {
      this.workMembership.name = this.membershipForm.name;
      this.workMembership.price = this.membershipForm.price;
    }
  
    public resetForm()
    {
      this.membershipForm.name = this.workMembership.name;
      this.membershipForm.price = this.workMembership.price;
    }








      /*ANTERIOR--------------------------------------------------------------------------------
      -------------------------------------------------------------------------------------*/
    /*{
        this.activatedRoute.params.subscribe
        (
            params => 
            {
                this.idMembership = params['id'];
            }
        );

        this.getMembershipFromIdService();
    }*/

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

    /*
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
    */

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

      /*

    public mainPageBtn() {
      this.router.navigateByUrl('/main');
    }
*/

}
